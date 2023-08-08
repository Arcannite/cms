import { staticContents } from '../app/staticContent.js'
import { useRouter } from 'next/router'

export const getStaticProps = async () => {
  var res, posts;
  if (process.env.NODE_ENV === 'production') {
    res = await fetch('http://cms-arcannite.vercel.app/api/posts')
  }
  else {
    res = await fetch('http://localhost:3000/api/posts')
  }
  
  if (res.status == 200 || res.status == 201) {
    posts = await res.json()
  }
  else {
    posts = staticContents
  }
  return { props: { posts } }
}

export default function Home({ posts }) {
  const router = useRouter()
  return (
    <div className="min-h-screen items-center justify-between p-24">
      {
        posts.map( (post) => (
          <div className="space-y-6 mb-12" key={post.id}>
            <div className="text-2xl"> {post.title} </div>
            <div> {post.author} </div>
            <div> {post.postDate.slice(0, -1).split("T").join(" ")} </div>
            <div className="text-base/loose"> {post.content} </div>
            <br/>
          </div>
        ))
      }
      { process.env.NODE_ENV }
    </div>
  )
}