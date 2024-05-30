"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import imagesrc from "@/assets/ContactPageImages/90_1.png";
import TireDerivedFuel from "@/assets/ProductScreenImages/tire-derived-fuel.png";

// import blog1 from "@/assets/blogpageImages/blog (1).png";
// import blog2 from "@/assets/blogpageImages/blog (2).png";
// import blog3 from "@/assets/blogpageImages/blog (3).png";
// import blogFigure1 from "@/assets/blogpageImages/blogFigure (1).png";
// import blogFigure2 from "@/assets/blogpageImages/blogFigure (2).png";
// import blogFigure3 from "@/assets/blogpageImages/blogFigure (3).png";
// import blogFigure4 from "@/assets/blogpageImages/blogFigure (4).png";
import profile from "@/assets/blogpageImages/profile.png";
import "react-datepicker/dist/react-datepicker.css";
import CommonHeroSectionCard from "@/components/CommonHeroSectionCard";
import Article from "@/components/blogPageCmp/Article";
import BlogPostComponent from "@/components/blogPageCmp/BlogPost";
import ProfileSection from "@/components/blogPageCmp/ProfileSection";
import Pagination from "@/components/blogPageCmp/Pagination";
import axios from "axios";

const Page = ({ searchParams }: any) => {
    const [posts, setPosts] = useState<any>([]);
    const [count, setCount] = useState<any>();
    const page = parseInt(searchParams.page) || 1
    const [loading, setLoading] = useState(true);
    const [recentPosts, setRecentPosts] = useState<any>([]);
    const title = "Blog";
    const description =
        "Explore Expert Perspectives and Industry Trends in Rubber Recycling and Sustainable Practices";


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`/api/post/paginated?page=${page}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
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

        fetchRecentPosts();

        fetchPosts();
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

                    {posts.map((article:any, index:any) => (
                        <Article key={index} article={article} />
                    ))}

                    <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
                    <ProfileSection profileImg={profile} />

                    <div className="flex flex-col items-center px-14 py-8 mt-10 bg-zinc-500 ">
                        <div className="text-lg  uppercase text-white">Aside</div>
                        <div className="mt-2 text-sm uppercase text-white">APRIL 24, 2024</div>
                        <div className=" mt-5 text-sm font-light  text-stone-200 ">
                            “I never tried to prove nothing, just wanted to give a good show.
                            My life has always been my music, it’s always come first, but the
                            music ain’t worth nothing if you can’t lay it on the public. The
                            main thing is to live for that audience, ’cause what you’re there
                            for is to please the people.”
                        </div>
                    </div>
                </div>

                <div className="flex flex-col  px-5 mt-16">
                    <div className="mt-14">
                        <h2 className=" text-lg font-bold  uppercase text-zinc-800">
                            Categories
                        </h2>
                        <div className=" mt-3 bg-zinc-800 h-1 w-14 mb-5" />
                        <div className=" uppercase text-neutral-400 flex flex-col gap-5">
                            <p>Environment</p>
                            <p>Heat Pumps</p>
                            <p>Solar System</p>
                            <p>Wind Turbines</p>
                            <p>Working Process</p>
                        </div>
                    </div>

                    <div className="flex flex-col mt-10">
                        <h2 className=" text-lg font-bold text-zinc-800 uppercase">
                            Recent Post
                        </h2>
                        <div className=" mt-3 bg-zinc-800 h-1 w-14 mb-5" />
                        <div className="flex flex-col gap-8 mt-9 text-sm">
                            {recentPosts.map((post:any) => (
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

                    <div className="mt-14">
                        <div className="text-lg font-bold uppercase text-zinc-800 ">
                            Tags Widget
                        </div>
                        <div className=" mt-3 bg-zinc-800 h-1 w-14 mb-5" />
                        <div className="flex flex-wrap gap-5 mt-8 text-sm uppercase text-[#8C8C8C] font-semibold">
                            <p>Environment</p>
                            <p>Heat Pumps</p>
                            <p>Solar System</p>
                            <p>Wind Turbines</p>
                            <p>Working Process</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Page;