import bcryptjs from 'bcryptjs';
import dbConnect from "@/utils/dbConnection";
import UserModel from "@/models/userModel";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    dbConnect()

    try {
        const {email, password} = await request.json()

        const user = await UserModel.findOne({email})

        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }

        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }

        const tokenData = {
            id: user._id,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            token
        })
        response.cookies.set("token", token, {
            httpOnly: true, 
            
        })
        return response;

    } catch (error: any) {
         return NextResponse.json({error: error.message}, {status: 500})
    }
}