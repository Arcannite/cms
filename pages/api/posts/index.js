import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method ==='GET') {
    const posts = await prisma.post.findMany();
    return res.send(posts);
  }

  else if (req.method === 'POST') {
    // assuming data is sanitized and all fields match exactly
    const { body } = req;
    const newBlogPost = await prisma.post.create({
      data: body
    })
    return res.status(201).send(newBlogPost)
  }
}