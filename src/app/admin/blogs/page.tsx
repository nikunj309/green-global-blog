"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/AdminCmt/AdminLayout';
import { CldUploadButton, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import BlogForm from '@/components/AdminCmt/BlogForm';

const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [desc, setDescription] = useState('');
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [category, setCategory] = useState('');
    const [publicId, setPublicId] = useState("");
    const [publicId2, setPublicId2] = useState("");

    const router = useRouter();

    const handleImageUpload1 = (result: CloudinaryUploadWidgetResults) => {
        console.log("result: ", result);
        const info = result.info as object;

        if ("secure_url" in info && "public_id" in info) {
            const url = info.secure_url as string;
            const public_id = info.public_id as string;
            setImage1(url);
            setPublicId(public_id);
            console.log("url: ", url);
            console.log("public_id: ", public_id);
        }
    };
    const handleImageUpload2 = (result: CloudinaryUploadWidgetResults) => {
        console.log("result: ", result);
        const info = result.info as object;

        if ("secure_url" in info && "public_id" in info) {
            const url = info.secure_url as string;
            const public_id = info.public_id as string;
            setImage2(url);
            setPublicId2(public_id);
            console.log("url: ", url);
            console.log("public_id: ", public_id);
        }
    };

    const slugify = (str: string) =>
         
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/post', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    slug:slugify(title),
                    desc,
                    image1,
                    image2,
                    category
                })
            });

            if (response.ok) {
                router.push('/'); // Redirect on success
            } else {
                // Handle non-2xx response status codes
                const errorData = await response.json();
                throw new Error(errorData.error || 'An error occurred'); // Provide a more informative error message
            }
        } catch (error) {
            console.error('Error creating post:', error);
            // Display an error message to the user (optional)
        }
    };

    return (
        <AdminLayout>
            {/* <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add New Blog</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <input
                            placeholder='Enter title'
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none focus:ring-opacity-40"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea
                            placeholder='Enter description'
                            value={desc}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none focus:ring-opacity-40"
                            rows={5}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-6">
                        <label>
                            Image 1:
                            <CldUploadButton
                                uploadPreset="owejpqbm"
                                onSuccess={handleImageUpload1}
                            >
                                Upload Image 1
                            </CldUploadButton>
                        </label>
                    </div>
                    <div className="mb-6">
                        <label>
                            Image 2:
                            <CldUploadButton
                                uploadPreset="owejpqbm"
                                onSuccess={handleImageUpload2}
                            >
                                Upload Image 2
                            </CldUploadButton>
                        </label>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select
                            title='Category'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none focus:ring-opacity-40"
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="Environment">Environment</option>
                            <option value="Heat Pumps">Heat Pumps</option>
                            <option value="Solar System">Solar System</option>
                            <option value="Wind Turbines">Wind Turbines</option>
                            <option value="Working Process">Working Process</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-200"
                    >
                        Add Blog
                    </button>
                </form>
            </div> */}
             <BlogForm  buttonText="Add New" />
        </AdminLayout>
    );
};

export default NewBlog;
