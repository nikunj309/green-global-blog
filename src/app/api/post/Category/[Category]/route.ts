import dbConnect from '@/utils/dbConnection';
import PostModel from '@/models/postModel';
import { NextResponse } from 'next/server';

export const GET = async (req:any, { params }: { params: { Category: string } }) => {
    await dbConnect();

    const { Category } = params;


    try {
       console.log(Category)
        const posts = await PostModel.find({category:Category}) // Assuming 'author' is a reference to a user in your PostModel schema
        console.log(posts)
       
        if (!posts) {
            return new NextResponse(
                JSON.stringify({ message: "Posts not found" }),
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            posts,
        });
    } catch (error) {
        console.error('Error fetching post:', error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong" }),
            { status: 500 }
        );
    }
};





