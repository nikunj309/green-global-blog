import mongoose, { Schema, Document, Types } from "mongoose";
import { User } from "./userModel";

export interface Post {
    slug: string;
    title: string;
    desc: string;
    image1: string;
    image2: string;
    category: string;
    author: Types.ObjectId | User;
    createdAt?: Date;
    updatedAt?: Date;

}

const PostSchema: Schema<Post> = new mongoose.Schema({
    slug: {
        type: String,
        unique: true,
        required: [true, 'Slug is required']
    },
    title: {
        type: String,
        required: [true, 'title is required'],
    },
    desc: {
        type: String,
        required: [true, 'Description is required'],
    },
    image1: {
        type: String,
        required: [true, 'Image is required'],
    },
    image2: {
        type: String,
        required: [true, 'Image is required'],
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

}, {
    timestamps: true  // This will add `createdAt` and `updatedAt` fields automatically
})

const PostModel = (mongoose.models.Post as mongoose.Model<Post>) || mongoose.model<Post>('Post', PostSchema);

export default PostModel;