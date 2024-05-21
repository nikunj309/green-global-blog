import { getDataFromToken } from "@/helpers/getDataFromToken";
import dbConnect from "@/utils/dbConnection";
import UserModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    dbConnect()
    try {
        const userId = await getDataFromToken(request);
        const user = await UserModel.findOne({ _id: userId }).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

}