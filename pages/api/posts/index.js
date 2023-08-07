import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method ==='GET') {
    try {
      const posts = await prisma.post.findMany();
      return res.json(posts);
    }
    catch (e) {
      console.log(e);
      return;
    }
  }
}