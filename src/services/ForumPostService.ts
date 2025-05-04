export const createForumPost = async (userId: number, title: string, content: string) => {
  const response = await fetch("https://futurepathbe-tanbin-production.up.railway.app/app/forum-post/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: userId, title, content }),
  });

  if (!response.ok) throw new Error("Đăng bài thất bại!");
};

export const createComment = async (userId: number, postId: number, content: string) => {
  const response = await fetch(`https://futurepathbe-tanbin-production.up.railway.app/app/comment/${postId}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: userId, content }),
  });

  if (!response.ok) throw new Error("Đăng bình luận thất bại!");
};
