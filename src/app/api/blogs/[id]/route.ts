import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Adjust this import to your prisma setup

export async function GET(req: NextRequest) {
  // Extract the id from the URL path
  const id = req.nextUrl.pathname.split('/').pop(); // this give ID in string 

  if (!id) {
    return NextResponse.json({ error: "Invalid or missing id" }, { status: 400 });
  }

  try{
    const blog = await prisma.blogPost.findUnique({
      where: {
        id: parseInt(id, 10), // Make sure to convert the id to an integer
      },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ error: "Invalid or missing id" }, { status: 400 });
  }

  try {
    const data = await req.json();
    const { author, title, content, subDescripation, bgImg } = data;

    if (!author || !title || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const updatedBlog = await prisma.blogPost.update({
      where: { id: parseInt(id, 10) },
      data: {
        author,
        title,
        content,
        subDescripation,
        bgImg,
        // optionalImage: optionalImage ?? null,
      },
    });

    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error: unknown) {
    let errorMessage = 'Error fetching posts';

    if (error instanceof Error) {
        errorMessage = error.message;
    }

    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
}
}

export async function DELETE(req: NextRequest){
  const id = req.nextUrl.pathname.split('/').pop();

  if(!id){
    return NextResponse.json({ messsage: "Id is missing or Invalid" }, {status: 400})
  }

  try {
    await prisma.blogPost.delete({
      where: {
        id: parseInt(id, 10),
      }
    });
    
    return NextResponse.json({message: "Blogs post deleted successfully"}, { status: 200})
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json({error: "Internal Server Error"}, { status: 500});    
  }
}
