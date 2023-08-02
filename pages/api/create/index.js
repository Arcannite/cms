const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function createPost(req, res) {
    const post = await prisma.post.create({
        data: {
            title: req.title,
            author: req.author,
            content: req.content,
        }
     })

    if (post.id) {
        res.status(200).json(post)
    } else {
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

export default async function handler(req, res) {
    // commit to the database
    if (req.method === 'POST') {
        return createPost(req, res)
    }
}