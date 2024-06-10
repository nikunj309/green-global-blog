import { AuthenticatedRequest, authenticate } from '@/middleware/authenticate'
import PostModel from '@/models/postModel'
import { deleteFromCloudinary, uploadOnCloudinary } from '@/utils/cloudinary';
import dbConnect from '@/utils/dbConnection'
import mongoose, { isValidObjectId } from 'mongoose';
import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// const storage = multer.diskStorage({
//     destination: './public/temp', // Modify 'uploads/' to your desired upload directory
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     },
// });

// const upload = multer({ storage }).fields([
//     { name: 'image1', maxCount: 1 },
//     { name: 'image2', maxCount: 1 },
// ]);


export async function GET(req: any, res: NextApiResponse) {
    await dbConnect();

    try {
        const posts = await PostModel.find() // Assuming 'author' is a reference to a user in your PostModel schema

        return NextResponse.json({
            success: true,
            posts,
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        // return res.status(500).json({ error: 'Server Error' });
        return NextResponse.json({ error: "Server Error" }, { status: 500 })
    }
}


export async function POST(req: AuthenticatedRequest | any, res: NextApiResponse | any) {

    await dbConnect()

    try {
        const token = req.cookies.get("token")?.value || '';


        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);

        const userId = decodedToken.id;
        console.log(userId);


        const body = await req.json()
        const { slug, title, desc, image1, image2, category } = body;

        console.log(slug, title, desc, image1, image2, category);

        if (!slug || !title || !desc || !image1 || !image2 || !category) {
            return NextResponse.json({ error: "All fields are requied" }, { status: 500 })
        }

        const post = await PostModel.create({
            slug,
            title,
            desc,
            image1,
            image2,
            category,
            author: userId
        })
        return NextResponse.json({
            message: "Post created successfully",
            success: true,
            post
        })

    } catch (error) {
        console.error('Error creating post:', error);
        return NextResponse.json({ error: "Server Error" }, { status: 500 })
    }


}


export async function DELETE(req: NextRequest, res: NextApiResponse) {
    try {
        await dbConnect()

        const { postId } =await  req.json()
        console.log(postId);
        

        if (!postId) {
            return NextResponse.json({ error: 'Missing postId parameter' }, { status: 400 });
        }

        const posts = await PostModel.findById(postId) 

        console.log("delete::: post", posts);
        
        

            const deletImage1FromCloudinary = posts &&  await deleteFromCloudinary(posts.image1)
            const deletImage2FromCloudinary = posts && await deleteFromCloudinary(posts.image2)
        

        console.log("delete from cloudinary :::: :: ",deletImage1FromCloudinary,deletImage2FromCloudinary);
        
        if (!deletImage2FromCloudinary && !deletImage1FromCloudinary) {
            console.error('Error deleting image from Cloudinary');
          }
        const deletedPost = await PostModel.findByIdAndDelete(postId);

        if (!deletedPost) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        // Handle successful deletion
        return NextResponse.json({ success: true, message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error deleting post:', error);
        return NextResponse.json({ error: 'Server Error' }, { status: 500 });
    }
}


export  async function PATCH(req: any, res: NextApiResponse) {
    // const { postId } = req.query;

    await dbConnect();

        try {
            // const token = req.cookies.get("token")?.value || '';

            // if (!token) {
            //     return res.status(401).json({ error: 'Unauthorized' });
            // }

            // const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!);
            // const userId = decodedToken.id;

            const body = await req.json();
            const { slug, title, desc, image1, image2, category } = body;

            if (!slug || !title || !desc || !image1 || !image2 || !category) {
                return NextResponse.json({ error: "All fields are requied" }, { status: 500 })
            }

            const updatedPost = await PostModel.findByIdAndUpdate(
                slug,
                { slug, title, desc, image1, image2, category },
                { new: true }
            );

            // if (!updatedPost) {
            //     return res.status(404).json({ error: 'Post not found' });
            // }

            return NextResponse.json({
                message: "Post created successfully",
                success: true,
                post: updatedPost
            })

        } catch (error) {
            console.error('Error updating post:', error);
            return NextResponse.json({ error: "Server Error" }, { status: 500 })
        }
}

