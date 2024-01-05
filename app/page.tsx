import PaddingContainer from "@/components/layout/padding_container";
import PostList from "@/components/post/post_lists";
import PostCard from "@/components/post/post_card";
import { DUMMY_POSTS } from "@/DUMMY_DATA";

export default function Home() {
  return (
  <PaddingContainer>
  
  <main className="space-y-10 bg-gray-100">
  <PostCard post={DUMMY_POSTS[0]} />
  <PostList posts={DUMMY_POSTS.filter((_post,index) => index > 0 && index < 3)} />
    </main>
    </PaddingContainer>
  )
}
 