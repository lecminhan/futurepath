import React from "react";
import styles from "./styles/forumSidebar.module.css";

interface Props {
  activeButton: string | null;
  onButtonClick: (buttonName: string) => void;
}

const ForumSidebar: React.FC<Props> = ({ activeButton, onButtonClick }) => {
  const menuItems = [
    { label: "Khám phá bài viết" },
    { label: "Chia sẻ từ người dùng" },
    { label: "Lời khuyên từ chuyên gia" },
  ];

  const personalItems = [{ label: "Câu hỏi của bạn" }];

  const renderButton = (label: string) => (
    <button
      onClick={() => onButtonClick(label)}
      className={`${styles.forumSidebar__button} ${activeButton === label ? styles.forumSidebar__buttonActive : ""}`}
    >
      {label}
    </button>
  );

  return (
    <aside className={styles.forumSidebar}>
      <input type="text" placeholder="Tìm kiếm" className={styles.forumSidebar__searchInput} />
      <nav style={{ marginTop: "20px" }}>
        <ul className={styles.forumSidebar__list}>
          <li><strong>MENU</strong></li>
          {menuItems.map((item) => (
            <li key={item.label}>{renderButton(item.label)}</li>
          ))}
          <li><strong>CÁ NHÂN</strong></li>
          {personalItems.map((item) => (
            <li key={item.label}>{renderButton(item.label)}</li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default ForumSidebar;
