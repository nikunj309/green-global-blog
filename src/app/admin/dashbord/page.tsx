"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '@/components/AdminCmt/PostCard';
import AdminLayout from '@/components/AdminCmt/AdminLayout';
import { useRouter } from 'next/navigation';

interface Post {
    _id: string;
    slug: string
  }
  


const Admin = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const router = useRouter()

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('/api/post');
            setPosts(response.data.posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleDelete = async (postId: any) => {
        
        try {
            await axios.delete('/api/post/',{ data: { postId }});
            fetchPosts(); // Refresh posts after deletion
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };
    

    const handleEdit = (postId: any) => {
        router.push(`/admin/edit/${postId}`)
    };

    return (
        <AdminLayout>
       <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {posts?.length > 0 && posts.map((post) => (
                        <div key={post._id}>
                            <PostCard post={post} onDelete={() => handleDelete(post._id)} onEdit={() => handleEdit(post.slug)} />
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default Admin;
