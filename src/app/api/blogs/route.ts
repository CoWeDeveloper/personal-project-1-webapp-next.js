import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Named export for the GET method
export async function GET(req: Request) {
    try {
        // console.log('Prisma client:', prisma);  // Log the prisma instance
        // if (!prisma || !prisma.blogPost) {
        //     throw new Error('Prisma instance or model not defined');
        // }
        const posts = await prisma.blogPost.findMany();
        return NextResponse.json(posts);
    } catch (error: unknown) {
        let errorMessage = 'Error fetching posts';

        if (error instanceof Error) {
            errorMessage = error.message;
        }

        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}

// Named export for the POST method
export async function POST(req: Request) {
    try {
        
        const { id, author, title, subDescripation, content, bgImg,  date } = await req.json();
        console.log('Incoming data:', { id, author, title, subDescripation, content, bgImg, date });

        const newPost = await prisma.blogPost.create({
            data: {
                id,
                title,
                author,
                subDescripation,
                content,
                bgImg,
                
                date,
            },
        });
        return NextResponse.json(newPost, { status: 201 });
    } catch (error: unknown) {
        let errorMessage = 'Error Creating posts';

        if (error instanceof Error) {
            errorMessage = error.message;
        }

        console.error('Error creating posts:', error);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
    }


