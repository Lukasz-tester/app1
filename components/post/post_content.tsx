import { getReadingTime, getRelativeDate } from "@/lib/helpers";
import { Post } from "@/types/collection";
import { ArrowRight } from "lucide-react";

interface PostContentProps {
  post: Post;
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <div className="space-y-2">
      {/* Tags */}
      <div className="flex items-center gap-2 text-sm text-neutral-400">
        <div
          className={`font-medium ${
            post.category.title === "Cities"
              ? "text-emerald-600"
              : "text-indigo-600"
          }`}
        >
          {post.category.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-300"/>
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-300"/>
        <div>{getReadingTime(post.body)}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-300"/>
        <div>{getRelativeDate(post.date_created)}</div>
      </div>
      {/* Title */}
      <h2 className="font-medium text-3xl">{post.title} </h2>
      {/* Description */}
      <p className="text-neutral-600 leading-snug">{post.description}</p>
      {/* Read More */}
      <div className="flex items-center gap-2 pt-3">Read More <ArrowRight size={14}/></div>
    </div>
  );
};

export default PostContent;
