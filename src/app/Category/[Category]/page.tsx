"use client";
import Article from '@/components/blogPageCmp/Article';
import React, { useEffect, useState } from 'react';

interface Post {
    title: string;
    category: string;
    image2: string; // Assuming image2 is a URL
    desc: string;
}

const Page = ({ params }: { params: { Category: string } }) => {
    const { Category } = params;
    const [post, setPost] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/post/Category/${Category}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);

                // Ensure that the data is an array
                setPost(data.posts);
            } catch (error) {
                console.error('Error fetching data:', error);
                setPost([]); // Set post to an empty array on error
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [Category]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="max-w-3xl mx-auto px-4 py-8">
                {post.map((article, index) => (
                    <Article key={index} article={article} />
                ))}
            </div>
        </>
    );
};

export default Page;
