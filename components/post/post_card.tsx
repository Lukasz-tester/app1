import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";
import PostContent from "./post_content";

interface PostProps {
  post: Post;
  layout?: "vertical" | "horizontal";
}

const PostCard = ({ post, layout = "horizontal" }: PostProps) => {
  return (
    <Link
      className={` ${
        layout === "horizontal"
          ? "grid grid-cols-2 items-center gap-10"
          : "space-y-10"
      }`}
      href={`/post/${post.slug}`}
    >
      {/* Post image */}
      <Image
        className="max-h-[250px] w-full rounded-md object-cover object-center"
        src={post.image}
        alt={post.title}
        height={300}
        width={600}
      />
      {/* Post content */}
      <PostContent post={post} />
    </Link>
  );
};

export default PostCard;
