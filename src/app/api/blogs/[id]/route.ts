import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Handler for GET requests
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    // console.log(req.query)
  const { id } = req.query;
  const parsedId = parseInt(id as string, 10);

  try {
    const blog = await prisma.blogPost.findUnique({
      where: { id: parsedId },
    });
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: 'Blog post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog post' });
  }
}

// Handler for PUT requests
export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const parsedId = parseInt(id as string, 10);
  const { title, author, subDescripation, content, bgImg, optionalImage, date } = req.body;

  try {
    const updatedBlog = await prisma.blogPost.update({
      where: { id: parsedId },
      data: { title, author, subDescripation, content, bgImg, optionalImage, date },
    });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog post' });
  }
}
