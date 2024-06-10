// components/BlogForm.tsx
import React, { useState, useEffect } from 'react';
import { CldUploadButton } from 'next-cloudinary'; // Adjust the import as per your setup
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface BlogFormProps {
    initialData?: {
        // slug: string;
        id: string
        title: string;
        desc: string;
        image1: string;
        image2: string;
        category: string;
    };
    buttonText: string;
}

const BlogForm: React.FC<BlogFormProps> = ({ initialData, buttonText }) => {
    // console.log(initialData);
    
    const [title, setTitle] = useState('');
    const [desc, setDescription] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [category, setCategory] = useState('');

    const router = useRouter();

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setDescription(initialData.desc);
            setImage1(initialData.image1);
            setImage2(initialData.image2);
            setCategory(initialData.category);
        }
    }, [initialData]);


    const handleImageUpload1 = (result: any) => {
        const info = result.info as object;

        if ("secure_url" in info && "public_id" in info) {
            const url = info.secure_url as string;
            const public_id = info.public_id as string;
            setImage1(url);
        }
    };

    const handleImageUpload2 = (result: any) => {
        const info = result.info as object;

        if ("secure_url" in info && "public_id" in info) {
            const url = info.secure_url as string;
            const public_id = info.public_id as string;
            setImage2(url);
        }
    };

    const slugify = (str: string) =>

        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
       
            try {
                const response = await fetch('/api/post', {
                    method: 'POST',
                    body: JSON.stringify({
                        title,
                        slug: slugify(title),
                        desc,
                        image1,
                        image2,
                        category
                    })
                });

                if (response.ok) {
                    router.push('/admin/dashbord');
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'An error occurred'); 
                }
            } catch (error) {
                console.error('Error creating post:', error);
            }
        

    };

    const handleUpdate = async() => {
       
        const updateData = {
            title,
            slug: slugify(title),
            desc,
            image1,
            image2,
            category
        };

        console.log("-------------------",updateData);
        
        try {
            const response = await fetch(`/api/post/${initialData.id}`, {
                method: 'PATCH', 
                body: JSON.stringify(updateData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                router.push('/');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'An error occurred');
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                {buttonText} Blog
            </h2>
            <form onSubmit={buttonText === 'Add New' ? handleSubmit : handleUpdate}>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                        placeholder="Enter title"
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
                        placeholder="Enter description"
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
                        title="Category"
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
                    {buttonText}
                </button>
            </form>
        </div>
    );
};

export default BlogForm;
