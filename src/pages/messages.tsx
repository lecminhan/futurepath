import React, { useState } from 'react';
import './Styles/messages.css';
import MainLayout from '../layouts/MainLayout';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Expert {
  id: number;
  name: string;
  avatar: string;
}

interface Message {
  id: number;
  expertId: number;
  sender: string;
  content: string;
  timestamp: string;
}

const experts: Expert[] = [
  { id: 1, name: "Nguyễn Văn A", avatar: "https://i.pravatar.cc/100?img=11" },
  { id: 2, name: "Trần Thị B", avatar: "https://i.pravatar.cc/100?img=12" },
  { id: 3, name: "Phạm Minh C", avatar: "https://i.pravatar.cc/100?img=13" },
];

const allMessages: Message[] = [
  { id: 1, expertId: 1, sender: "Nguyễn Văn A", content: "Chào bạn, mình có thể giúp gì?", timestamp: "2025-05-04 10:00" },
  { id: 2, expertId: 1, sender: "Bạn", content: "Em muốn tư vấn chọn ngành.", timestamp: "2025-05-04 10:02" },
  { id: 3, expertId: 2, sender: "Trần Thị B", content: "Bạn cần hỗ trợ gì nhỉ?", timestamp: "2025-05-04 11:00" },
];

const Messages: React.FC = () => {
  const navigate = useNavigate();
  const [selectedExpertId, setSelectedExpertId] = useState<number>(experts[0].id);
  const [messages, setMessages] = useState<Message[]>(allMessages);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      expertId: selectedExpertId,
      sender: "Bạn",
      content: input,
      timestamp: new Date().toLocaleString(),
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  const expertMessages = messages.filter(m => m.expertId === selectedExpertId);
  const selectedExpert = experts.find(e => e.id === selectedExpertId);

  // Lọc theo ô tìm kiếm
  const filteredExperts = experts.filter(expert =>
    expert.name.toLowerCase().includes(search.toLowerCase())
  );

  // Lấy tin nhắn cuối cùng của mỗi expert
  const getLastMessage = (expertId: number) => {
    const expertMsgs = messages.filter(msg => msg.expertId === expertId);
    if (expertMsgs.length === 0) return null;
    return expertMsgs[expertMsgs.length - 1];
  };

  return (
    <MainLayout>
      <div className="chatsystem-page">
        <aside className="chatsystem-sidebar">
          <input
            type="text"
            placeholder="Tìm kiếm chuyên gia..."
            className="chatsystem-sidebar-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <h3>Hộp thư</h3>

          <ul>
            {filteredExperts.map(expert => {
              const lastMsg = getLastMessage(expert.id);

              return (
                <li
                  key={expert.id}
                  className={selectedExpertId === expert.id ? "chatsystem-sidebar-item active" : "chatsystem-sidebar-item"}
                  onClick={() => setSelectedExpertId(expert.id)}
                >
                  <img src={expert.avatar} alt={expert.name} className="chatsystem-avatar" />
                  <div className="chatsystem-sidebar-text">
                    <span className="chatsystem-sidebar-name">{expert.name}</span>
                    {lastMsg && (
                      <span className="chatsystem-sidebar-lastmsg">
                        {lastMsg.sender}: {lastMsg.content} • {lastMsg.timestamp}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="chatsystem-chat-container">
          <header className="chatsystem-chat-header">
            <IconButton onClick={() => navigate("/expert")} sx={{ color: "#0d6efd" }}>
              <ArrowBackIcon />
            </IconButton>
            <img src={selectedExpert?.avatar} alt={selectedExpert?.name} className="chatsystem-avatar-large" />
            <h2>{selectedExpert?.name}</h2>
          </header>

          <div className="chatsystem-chat-messages">
            {expertMessages.map(msg => (
              <div key={msg.id} className={`chatsystem-chat-message ${msg.sender === "Bạn" ? "me" : "expert"}`}>
                <div className="chatsystem-message-content">{msg.content}</div>
                <div className="chatsystem-message-timestamp">{msg.timestamp}</div>
              </div>
            ))}
          </div>

          <div className="chatsystem-chat-input">
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              autoComplete="off"
            />
            <button onClick={handleSend}>Gửi</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Messages;
