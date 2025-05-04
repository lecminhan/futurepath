import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import ForumSidebar from "../components/Forum/ForumSidebar";
import PostInput from "../components/Forum/PostInput";
import PostItem from "../components/Forum/PostItem";
import FeaturedCourses from "../components/Forum/FeaturedCourses";
import ForumPagination from "../components/Forum/ForumPagination";
import { ref, onValue } from "firebase/database";
import { database } from "../config/FirebaseConfig";
import { getUserId } from "../utils/useridUtils";

interface Post {
  id: string;
  post_id: number;
  title: string;
  content: string;
  created_at: string;
  user_id: number;
  user_name: string;
  role: string;
}

const Forum: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>("Câu hỏi");
  const [activePage, setActivePage] = useState<number>(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const itemsPerPage = 4;
  const UserId = getUserId();

  useEffect(() => {
    const postsRef = ref(database, "forum_posts");
    const unsubscribe = onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      const loadedPosts: Post[] = [];

      for (let id in data) {
        if (data[id].title) {
          loadedPosts.push({
            id,
            post_id: data[id].post_id,
            title: data[id].title,
            content: data[id].content,
            created_at: data[id].created_at,
            user_id: data[id].user_id,
            user_name: data[id].user_name,
            role: data[id].role || "User",
          });
        }
      }

      setPosts(loadedPosts.reverse());
    });

    return () => unsubscribe();
  }, []);

  const filteredPosts = posts.filter(post => {
    if (activeButton === "Khám phá bài viết") return true;
    if (activeButton === "Chi sẻ từ người dùng") return post.role === "Student";
    if (activeButton === "Lời khuyên từ chuyên gia") return post.role === "Expert";
    if (activeButton === "Câu hỏi của bạn") return post.user_id === Number(UserId);
    return true;
  });

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <MainLayout>
      <div style={{ display: "flex" }}>
        <ForumSidebar activeButton={activeButton} onButtonClick={setActiveButton} />
        <main style={{ width: "50%", padding: "20px" }}>
          <PostInput />
          <PostItem posts={currentPosts} />
          <ForumPagination
            activePage={activePage}
            totalPages={totalPages}
            onPageClick={setActivePage}
            onPrev={() => setActivePage(p => Math.max(p - 1, 1))}
            onNext={() => setActivePage(p => Math.min(p + 1, totalPages))}
          />
        </main>
        <FeaturedCourses />
      </div>
    </MainLayout>
  );
};

export default Forum;
