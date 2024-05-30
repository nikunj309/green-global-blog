import PostModel from "@/models/postModel";
import dbConnect from "@/utils/dbConnection";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: any, res: NextApiResponse) {
    await dbConnect();

    try {
        const recentPosts = await PostModel.find()
        .sort({ createdAt: -1 })  // Sort by creation date in descending order
        .limit(3)  

        return NextResponse.json({
            success: true,
            posts:recentPosts,
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: "Server Error" }, { status: 500 })
    }
}
