import { staticContents } from './staticContent.js'

export default function Home() {
  
  return (
    <div className="min-h-screen items-center justify-between p-24">
      {
        staticContents.map( (post) => (
          <div className="space-y-6 mb-12" key={post.id}>
            <div className="text-2xl"> {post.title} </div>
            <div> {post.author} </div>
            <div> {post.postDate} </div>
            <div className="text-base/loose"> {post.content} </div>
          </div>
        ))
      }
    </div>
  )
}