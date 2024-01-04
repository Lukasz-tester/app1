import PaddingContainer from "@/components/layout/padding_container";
import PostCard from "@/components/post/post_card";
import { DUMMY_POSTS } from "@/DUMMY_DATA";

export default function Home() {
  return (
  <PaddingContainer>
  
  <main className="h-auto space-y-10  bg-gray-200">
  <PostCard post={DUMMY_POSTS[0]} />
    </main>
    </PaddingContainer>
  )
}
 