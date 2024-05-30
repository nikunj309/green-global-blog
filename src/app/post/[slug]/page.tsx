"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

// const getData = async (slug) => {
//     const res = await fetch(`/api/post/${slug}`, {
//         cache: "no-store"
//     })
//     if (!res.ok) {
//         throw new Error("Failed")
//     }
//     return res.json();
// }

const Page = ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    // const data = await getData(slug);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/post/${slug}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);

                setPost(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="max-w-3xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
                <p className="text-sm text-gray-600 mb-4">Category: {post.category}</p>
                <div className="flex justify-center mb-6">
                    <img src={post.image2} alt="Image" className="w-full h-auto max-h-80 rounded-lg shadow-lg" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{post.desc}</p>
            </div>
        </>


    )
}

export default Page