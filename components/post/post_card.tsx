import { Post } from "@/types/collection"
import Image from "next/image";
import Link from "next/link";
import PostContent from "./post_content";

interface PostProps {
    post: Post;
}

const PostCard = ( { post }: PostProps) => {
  return (
    <Link className="grid grid-cols-2 gap-10 items-center" href={`/post/${post.slug}`}>
        {/* Post image */}
        <Image className="rounded-md w-full object-cover object-center max-h-{300}" src={post.image} alt={post.title} height={300} width={600}/>
        {/* Post content */}
        <PostContent post={post} />
    </Link>
  )
}

export default PostCard;