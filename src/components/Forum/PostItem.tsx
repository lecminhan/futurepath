import React, { useEffect, useState } from "react";
import "./styles/postitem.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatIcon from "@mui/icons-material/Chat";
import { getUserId } from "../../utils/useridUtils";
import { useNotification } from "../../services/NotificationServices";
import { createComment } from "../../services/ForumPostService";
import { listenComments, deletePostAndComments, Comment } from "../../services/FirebasePostService";

interface Post {
  id: string;
  post_id: number;
  title: string;
  content: string;
  created_at: string;
  user_id: number;
  user_name: string;
}

interface Props {
  posts: Post[];
}

const PostItem: React.FC<Props> = ({ posts }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentInputs, setCommentInputs] = useState<{ [postId: number]: string }>({});
  const [showAllComments, setShowAllComments] = useState<{ [postId: number]: boolean }>({});
  const [fadingComments, setFadingComments] = useState<{ [commentId: string]: boolean }>({});
  const [openPostOptions, setOpenPostOptions] = useState<string | null>(null);

  const UserId = getUserId();
  const { showNotification } = useNotification();

  useEffect(() => {
    const unsubscribe = listenComments(setComments);
    return () => unsubscribe();
  }, []);

  const handleCommentSubmit = async (postId: number) => {
    const content = commentInputs[postId];
    if (!content?.trim()) return;

    const newComment: Comment = {
      id: `temp-${Date.now()}`,
      post_id: postId,
      content,
      created_at: new Date().toISOString(),
      user_id: UserId!,
    };

    setComments(prev => [newComment, ...prev]);
    setCommentInputs(prev => ({ ...prev, [postId]: "" }));

    try {
      await createComment(UserId!, postId, content);
    } catch {
      showNotification("Gửi bình luận thất bại!", "error");
      setComments(prev => prev.filter(c => c.id !== newComment.id));
    }
  };

  const handleDeletePost = async (postFirebaseId: string, postId: number) => {
    try {
      await deletePostAndComments(postFirebaseId, postId);
      showNotification("Xóa bài viết thành công!", "success");
    } catch {
      showNotification("Xóa bài viết thất bại!", "error");
    }
    setOpenPostOptions(null);
  };

  return (
    <div>
      {posts.length === 0 ? (
        <p style={{ textAlign: "center", padding: "40px", color: "#888" }}>
          Không có bài viết nào.
        </p>
      ) : (
        posts.map((post) => {
          const postComments = comments
            .filter((c) => c.post_id === post.post_id)
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

          const showAll = showAllComments[post.post_id] ?? false;
          const commentsToShow = showAll ? postComments : postComments.slice(0, Math.min(postComments.length, 1));

          return (
            <div className="post-item" key={post.id}>
              <div className="post-item__header">
                <div className="post-item__author">
                  <img src="../../../public/images/avt.jpg" alt="Avatar" className="post-item__avatar" />
                  <div>
                    <span className="post-item__name">{post.user_name}</span>
                    <p className="post-item__time">{new Date(post.created_at).toLocaleString()}</p>
                  </div>
                </div>

                {Number(post.user_id) === Number(UserId) && (
                  <div className="post-item__options" onClick={() => setOpenPostOptions(post.id)}>
                    ⋮
                  </div>
                )}

                {openPostOptions === post.id && (
                  <div className="post-item__menu">
                    <div onClick={() => handleDeletePost(post.id, post.post_id)} style={{ color: 'red' }}>Xóa bài viết</div>
                    <div onClick={() => setOpenPostOptions(null)} style={{ color: '#0D6EFD' }}>Hủy</div>
                  </div>
                )}
              </div>

              <h4 className="post-item__title">{post.title}</h4>
              <p className="post-item__content">{post.content}</p>

              <div className="post-item__comments">
                <h5>Bình luận</h5>
                <div style={{ paddingLeft: "20px" }}>
                  {commentsToShow.map((comment) => {
                    const isYou = comment.user_id === UserId;
                    const isPostOwner = comment.user_id === post.user_id;

                    return (
                      <div
                        key={comment.id}
                        className={`comment-item ${fadingComments[comment.id] ? "fade-out" : ""}`}
                        style={{
                          backgroundColor: isYou ? "#d9f7be" : "#f0f0f0",
                          padding: "10px",
                          borderRadius: "8px",
                          marginBottom: "8px",
                          position: "relative",
                          boxShadow: isYou ? "0 2px 8px rgba(24, 144, 255, 0.3)" : "none",
                        }}
                      >
                        <strong style={{ color: isYou ? "#1890ff" : "#333" }}>
                          {isYou ? "Bạn" : isPostOwner ? post.user_name : `Người ẩn danh ${comment.user_id}`}:
                        </strong> {comment.content}

                        <div style={{ fontSize: "12px", color: "#777", marginTop: "5px" }}>
                          {new Date(comment.created_at).toLocaleString()}
                        </div>
                      </div>
                    );
                  })}

                  {postComments.length > 1 && (
                    <p
                      style={{ color: "#007bff", cursor: "pointer", marginTop: "8px" }}
                      onClick={() => {
                        if (showAll) {
                          const newFading: { [id: string]: boolean } = {};
                          postComments.slice(1).forEach(comment => {
                            newFading[comment.id] = true;
                          });
                          setFadingComments((prev) => ({ ...prev, ...newFading }));

                          setTimeout(() => {
                            setShowAllComments((prev) => ({ ...prev, [post.post_id]: false }));
                            setFadingComments({});
                          }, 300);
                        } else {
                          setShowAllComments((prev) => ({ ...prev, [post.post_id]: true }));
                        }
                      }}
                    >
                      {showAll ? "Ẩn bớt bình luận" : `Xem tất cả bình luận (${postComments.length})`}
                    </p>
                  )}
                </div>
              </div>

              <input
                type="text"
                placeholder="Nhập bình luận của bạn"
                value={commentInputs[post.post_id] ?? ""}
                onChange={(e) => setCommentInputs((prev) => ({ ...prev, [post.post_id]: e.target.value }))}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCommentSubmit(post.post_id);
                }}
                className="post-item__comment-input"
                autoComplete="off"
              />

              <div className="post-item__footer">
                {postComments.length} <ChatIcon fontSize="small" />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default PostItem;
