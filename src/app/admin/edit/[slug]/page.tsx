"use client"
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AdminLayout from '@/components/AdminCmt/AdminLayout';
import { CldUploadButton, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import axios from 'axios';
import BlogForm from '@/components/AdminCmt/BlogForm';

const EditBlog = ({params}: { params: { slug: string } }) => {
    const router = useRouter();
    // const searchParams = useSearchParams();
    // const postId = searchParams.get('id');
    const { slug } = params;

    // const [title, setTitle] = useState('');
    // // const [slug, setSlug] = useState('');
    // const [desc, setDescription] = useState('');
    // const [image1, setImage1] = useState(null);
    // const [image2, setImage2] = useState(null);
    // const [category, setCategory] = useState('');
    // const [publicId, setPublicId] = useState("");
    // const [publicId2, setPublicId2] = useState("");
    const [initialData, setInitialData] = useState({
        slug:'',
        id:'',
        title:'',
        desc:'',
        image1:'',
        image2:'',
        category:'',
    });

    useEffect(() => {
     
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/"); // Redirect to user dashboard if token is found
          return;
        }
      }, []);

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        try {
            const response = await axios.get(`/api/post/${slug}`);
            console.log(response.data);
            
            setInitialData({
                slug:response.data.slug,
                id:response.data._id,
                title:response.data.title,
                desc:response.data.desc,
                image1:response.data.image1,
                image2:response.data.image2,
                category:response.data.category,
            });
          
            
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    };

    // console.log("sadada",initialData);
    // const handleImageUpload1 = (result: CloudinaryUploadWidgetResults) => {
    //     console.log("result: ", result);
    //     const info = result.info as object;

    //     if ("secure_url" in info && "public_id" in info) {
    //         const url = info.secure_url as string;
    //         const public_id = info.public_id as string;
    //         setImage1(url);
    //         setPublicId(public_id);
    //         console.log("url: ", url);
    //         console.log("public_id: ", public_id);
    //     }
    // };

    // const handleImageUpload2 = (result: CloudinaryUploadWidgetResults) => {
    //     console.log("result: ", result);
    //     const info = result.info as object;

    //     if ("secure_url" in info && "public_id" in info) {
    //         const url = info.secure_url as string;
    //         const public_id = info.public_id as string;
    //         setImage2(url);
    //         setPublicId2(public_id);
    //         console.log("url: ", url);
    //         console.log("public_id: ", public_id);
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const data = {
    //             title,
    //             slug,
    //             desc,
    //             image1,
    //             image2,
    //             category,
    //         };

    //         const response = await fetch(`/api/post/${postId}`, {
    //             method: 'PUT',
    //             body: JSON.stringify(data),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });

    //         if (response.ok) {
    //             router.push('/admin'); // Redirect to the admin page on success
    //         } else {
    //             // Handle non-2xx response status codes
    //             const errorData = await response.json();
    //             throw new Error(errorData.error || 'An error occurred'); // Provide a more informative error message
    //         }
    //     } catch (error) {
    //         console.error('Error updating post:', error);
    //         // Display an error message to the user (optional)
    //     }
    // };

    return (
        <AdminLayout>
            {/* <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Edit Blog</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                        <input
                            placeholder='Enter Slug'
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none focus:ring-opacity-40"
                            required
                        />
                    </div>
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
                        {image1 && (
                            <div className="mt-2">
                                <img src={image1} alt="Image 1" className="w-32 h-32 object-cover rounded-md" />
                            </div>
                        )}
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
                        {image2 && (
                            <div className="mt-2">
                                <img src={image2} alt="Image 2" className="w-32 h-32 object-cover rounded-md" />
                            </div>
                        )}
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
                        Update Blog
                    </button>
                </form>
            </div> */}
            <BlogForm initialData={initialData} buttonText="Update"/>
        </AdminLayout>
    );
};

export default EditBlog;
