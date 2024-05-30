import bcryptjs from 'bcryptjs';
import dbConnect from "@/utils/dbConnection";
import UserModel from "@/models/userModel";
import { NextResponse } from 'next/server';


export async function POST(request: Request, res: NextResponse) {
    await dbConnect()

    try {
        const { email, password } = await request.json();
        const existingUser = await UserModel.findOne({ email })

        if (existingUser) {
            return NextResponse.json({ error: "User with this email already exists" }, { status: 400 })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)


        const newUser = new UserModel({ email, password: hashedPassword })
        const savedUser = await newUser.save()

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ error: "Server Error" }, { status: 500 })
    }
}