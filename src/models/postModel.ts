import mongoose, { Schema, Document, Types } from "mongoose";
import { User } from "./userModel";

export interface Post {
    slug: string;
    title: string;
    desc: string;
    image1: string;
    image2: string;
    author: Types.ObjectId | User;

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
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const PostModel = (mongoose.models.Post as mongoose.Model<Post>) || mongoose.model<Post>('Post', PostSchema);

export default PostModel;