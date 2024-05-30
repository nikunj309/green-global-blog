// components/PostCard.js
import React from 'react';

const PostCard = ({ post, onDelete, onEdit }: any) => {
    const { _id, title, desc, image1, image2, category } = post;

    const handleDelete = () => {
        onDelete(_id);
    };

    const handleEdit = () => {
        onEdit(_id);
    };

    return (
        <div className="border rounded-lg overflow-hidden shadow-md ">
            <img src={image1} alt={title} className="w-full h-64 object-cover object-center" />
            <div className="p-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-gray-700 mb-4">{desc}</p>
                <p className="text-sm text-gray-500">{category}</p>
                <div className="flex justify-between items-center mt-4">
                    <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors" onClick={handleDelete}>
                        Delete
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors" onClick={handleEdit}>
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
