

"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import imagesrc from "@/assets/ContactPageImages/90_1.png";
import "react-datepicker/dist/react-datepicker.css";
import CommonHeroSectionCard from "@/components/CommonHeroSectionCard";
import Article from "@/components/blogPageCmp/Article";
import Pagination from "@/components/blogPageCmp/Pagination";
import axios from "axios";

const Page = ({ searchParams }) => {
    const [posts, setPosts] = useState(null);
    const [count, setCount] = useState();
    const page = parseInt(searchParams.page) || 1
    const [loading, setLoading] = useState(true);
    const [recentPosts, setRecentPosts] = useState([]);
    const title = "Blog";
    const description =
        "Transforming old tires into a greener tomorrow, one tire at a time";


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`/api/post/paginated?page=${page}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log("--------------------",data)
                setPosts(data.posts);
                setCount(data.count)
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchRecentPosts = async () => {
            try {
                const response = await axios.get('/api/post/recent');
                if (response.data.success) {
                    setRecentPosts(response.data.posts);
                    console.log(response.data.posts);
                    
                } else {
                    console.error('Failed to fetch posts:', response.data.error);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
        fetchRecentPosts();

    }, [count, page]);

    if (loading) {
        return <div>Loading...</div>;
    }
    const POST_PER_PAGE = 4;
    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    return (
        <>
            <CommonHeroSectionCard
                title={title}
                imageSrc={imagesrc}
                description={description}
            />
            <main className="flex flex-col md:flex-row justify-center md:p-8 max-md:mt-8 max-md:max-w-full">
                <div className="flex flex-col items-center justify-center mt-16 ">

                    {posts.map((article, index) => (
                        <Article key={index} article={article} />
                    ))}

                    <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
                </div>

                <div className="flex flex-col  px-5 mt-16">

                    <div className="flex flex-col mt-10">
                        <h2 className=" text-lg font-bold text-zinc-800 uppercase">
                            Recent Post
                        </h2>
                        <div className=" mt-3 bg-zinc-800 h-1 w-14 mb-5" />
                        <div className="flex flex-col gap-8 mt-9 text-sm">
                            {recentPosts.map((post) => (
                                <div key={post.title} className="flex items-center gap-5">
                                    <Image src={post.image1} alt={post.title} width={50} height={50} />
                                    <div className="flex flex-col gap-4">
                                        <h4 className="text-sm font-bold text-zinc-800 uppercase">
                                            {post.title}
                                        </h4>
                                        <p className="text-xs text-neutral-400">
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Page;