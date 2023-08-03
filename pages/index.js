import { staticContents } from '../app/staticContent.js'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts')
  var posts;
  if (res.status == 200 || res.status == 201) {
    posts = await res.json()
  }
  else {
    posts = staticContents
  }
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <div className="min-h-screen items-center justify-between p-24">
      {
        posts.map( (post) => (
          <div className="space-y-6 mb-12" key={post.id}>
            <div className="text-2xl"> {post.title} </div>
            <div> {post.author} </div>
            <div> {post.postDate.slice(0, -1).split("T").join(" ")} </div>
            <div className="text-base/loose"> {post.content} </div>
          </div>
        ))
      }
    </div>
  )
}