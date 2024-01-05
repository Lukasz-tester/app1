import { Post } from "@/types/collection";
import PostCard from "./post_card";

interface PostListProps {
  posts: Post[];
  layout?: "vertical" | "horizontal";
}

const PostList = ({ posts, layout = "vertical" }: PostListProps) => {
  return (
    <div className="grid grid-cols-2 gap-10">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} layout={layout} />
      ))}
    </div>
  );
};

export default PostList;
