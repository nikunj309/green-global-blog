import { AuthenticatedRequest, authenticate } from '@/middleware/authenticate'
import PostModel from '@/models/postModel'
import { uploadOnCloudinary } from '@/utils/cloudinary';
import dbConnect from '@/utils/dbConnection'
import mongoose from 'mongoose';
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


export async function POST(req: AuthenticatedRequest | any, res: NextApiResponse | any) {

    await dbConnect()

    try {
        const token = req.cookies.get("token")?.value || '';
        

        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);

        const userId = decodedToken.id;

        const { slug, title, desc, image1, image2 } = await req.json();

        if (!slug || !title || !desc || !image1 || !image2) {
            return NextResponse.json({ error: "All fields are requied" }, { status: 500 })
        }

        const post = await PostModel.create({
            slug,
            title,
            desc,
            image1,
            image2,
            author: userId
        })
        return NextResponse.json({
            message: "Post created successfully",
            success: true,
            post
        })

    } catch (error) {
        console.error('Error creating post:', error);
        // return res.status(500).json({ error: 'Server Error' });
        return NextResponse.json({ error: "Server Error" }, { status: 500 })
    }


}