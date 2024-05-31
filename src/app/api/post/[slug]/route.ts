import dbConnect from '@/utils/dbConnection';
import PostModel from '@/models/postModel';
import { NextResponse } from 'next/server';

export const GET = async (req:any, { params }: { params: { slug: string } }) => {
    await dbConnect();

    const { slug } = params;


    try {
        const post = await PostModel.findOne(
            { slug },
        )

        if (!post) {
            return new NextResponse(
                JSON.stringify({ message: "Post not found" }),
                { status: 404 }
            );
        }

        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (error) {
        console.error('Error fetching post:', error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong" }),
            { status: 500 }
        );
    }
};



export async function PATCH(req: any,{ params }: { params: { slug: string } }) {

    await dbConnect();
    // const { id } = req.query;
    const { slug } = params;
    console.log(params);
    
    const id = slug; 
    try {
        // const { id } = params;

        const body = await req.json();
        const { slug, title, desc, image1, image2, category } = body;

        // if (!slug || !title || !desc || !image1 || !image2 || !category) {
        //     return NextResponse.json({ error: "All fields are requied" }, { status: 500 })
        // }

        const updatedPost = await PostModel.findByIdAndUpdate(
            id,
            { slug, title, desc, image1, image2, category },
            { new: true }
        );

        return NextResponse.json({
            message: "Post updates successfully",
            success: true,
            post: updatedPost
        })

    } catch (error) {
        console.error('Error updating post:', error);
        return NextResponse.json({ error: "Server Error" }, { status: 500 })
    }
}

