// import PostModel from "@/models/postModel";
// import { NextResponse } from "next/server";

// export const GET = async (req) => {
//     const { searchParams } = new URL(req.url);

//     const page = searchParams.get("page");

//     const POST_PER_PAGE = 4;
//     const query = {
//         take: POST_PER_PAGE,
//         skip: POST_PER_PAGE * (page - 1),
//     }

//     try {
//         const posts = await PostModel.find({})
//             .limit(query.take)
//             .skip(query.skip)
//             .exec();

//         const count = await PostModel.countDocuments();

//         return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
//     } catch (error) {
//         console.error(error);
//         return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
//     }
// }


import PostModel from "@/models/postModel";
import dbConnect from "@/utils/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export  async function GET(req: NextApiRequest, res: NextApiResponse) {
 await dbConnect()
  
    // const { searchParams } = new URL(req.url);
    // const page = parseInt(searchParams.get("page") || "1"); // Ensure valid page number

    // const POST_PER_PAGE = 4;
    // const query = {
    //   take: POST_PER_PAGE,
    //   skip: Math.max(0, POST_PER_PAGE * (page - 1)), // Handle invalid page numbers
    // };

    // try {
    //   const [posts, count] = await Promise.all([
    //     PostModel.find({})
    //       .limit(query.take)
    //       .skip(query.skip)
    //       .exec(),
    //     PostModel.countDocuments(),
    //   ]);

    //   return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
    // } catch (error) {
    //   console.error(error);
    //   return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    // }
  
        const { searchParams } = new URL(req.url);

    const page = searchParams.get("page");

    const POST_PER_PAGE = 4;
    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
    }

    try {
        const posts = await PostModel.find({})
            .limit(query.take)
            .skip(query.skip)
            .exec();

        const count = await PostModel.countDocuments();

        return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }

}
