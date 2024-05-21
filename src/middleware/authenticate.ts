import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export interface AuthenticatedRequest extends NextApiRequest {
    userId?: string;
  }


export async function authenticate(req: AuthenticatedRequest, res: NextApiResponse, next: () => void) {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({message: 'Unauthorized'}, {status: 401})
    // return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as { userId: string };

    req.userId = decodedToken.userId; // Set userId in the request for further processing

    next(); // Continue to the next middleware or route handler
  } catch (error) {
    return NextResponse.json({message: 'Unauthorized'}, {status: 401})
  }
}