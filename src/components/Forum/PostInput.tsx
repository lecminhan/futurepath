import React, { useState } from "react";
import "./styles/postinput.css";
import { getUserId } from "../../utils/useridUtils";
import { useNotification } from "../../services/NotificationServices";
import { createForumPost } from "../../services/ForumPostService";

const PostInput: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const UserId = getUserId();
  const { showNotification } = useNotification();

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      showNotification("Vui lòng nhập tiêu đề và nội dung!", "warning");
      return;
    }

    setLoading(true);

    try {
      await createForumPost(UserId!, title, content);
      showNotification("Đăng bài thành công!", "success");
      setTitle("");
      setContent("");
      setExpanded(false);
    } catch {
      showNotification("Đăng bài thất bại!", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setExpanded(false);
  };

  return (
    <div className={`post-input ${expanded ? "post-input--expanded" : ""}`}>
      <img src="./images/avt.jpg" alt="User Avatar" />
      {!expanded ? (
        <input type="text" placeholder="Hãy chia sẻ điều gì đó..." onFocus={() => setExpanded(true)} />
      ) : (
        <>
          <input
            type="text"
            placeholder="Tiêu đề bài đăng"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Nội dung bài đăng"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="post-input__buttons">
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? "Đang đăng..." : "Tạo bài đăng"}
            </button>
            <button onClick={handleCancel} className="cancel">Hủy</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PostInput;
