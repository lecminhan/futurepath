import React, { useState, useEffect } from 'react';
import './Styles/messages.css';
import MainLayout from '../layouts/MainLayout';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';

import {
  getDatabase,
  ref,
  query,
  orderByChild,
  equalTo,
  onValue,
  off,
  DataSnapshot,
} from 'firebase/database';
import { app } from '../config/FirebaseConfig'; // Firebase app initialized

interface Consultation {
  id: string;
  reason: string;
  is_confirmed: boolean;
  created_at: string;
  student_id: string;
  user_name: string;
  expert_user_id: string;
  expert_name: string;
}

interface Message {
  id?: string;
  consultation_id: string;
  expert_id: number;
  message: string;
  sender_type: string;
  timestamp: number | string;
  user_id: number;
}

const Messages: React.FC = () => {
  const navigate = useNavigate();

  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [selectedConsultationId, setSelectedConsultationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

  const database = getDatabase(app);
const API_URL = import.meta.env.VITE_AN_API_URL;

  // Lấy user object từ localStorage, parse JSON
  const userDataString = localStorage.getItem('user');
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const role = userData?.role || '';
  const currentUserId = Number(userData?.id || 0);

  // Load danh sách consultation
  useEffect(() => {
    axios
      .get(`${API_URL}/api/consultation/getConsultation`)
      .then(res => {
        // Filter consultations based on the user role
        const filteredConsultations = res.data.consultations.filter((consultation: Consultation) => {
          if (role === 'Student') {
            return consultation.student_id === String(currentUserId);
          } else if (role === 'Expert') {
            return consultation.expert_user_id === String(currentUserId);
          }
          return false;
        });

        setConsultations(filteredConsultations);

        if (filteredConsultations.length > 0) {
          setSelectedConsultationId(filteredConsultations[0].id);
        }
      })
      .catch(err => console.error('Error loading consultations:', err));
  }, [role, currentUserId]); // Depend on role and currentUserId

  useEffect(() => {
    if (!selectedConsultationId) {
      setMessages([]);
      return;
    }

    const chatRef = ref(database, 'chatMessages');
    const q = query(
      chatRef,
      orderByChild('consultation_id'),
      equalTo(selectedConsultationId) // Filter by the selected consultation ID
    );

    const onValueChange = (snapshot: DataSnapshot) => {
      const data = snapshot.val();
      if (data) {
        // Cast the data to Message[] so TypeScript understands it
        const messagesArray: Message[] = Object.values(data) as Message[];

        // Sort messages by timestamp
        messagesArray.sort((a, b) => Number(a.timestamp) - Number(b.timestamp));

        // Display all messages, regardless of role
        setMessages(messagesArray);
      } else {
        setMessages([]);
      }
    };

    onValue(q, onValueChange);

    return () => {
      off(q, 'value', onValueChange);
    };
  }, [database, selectedConsultationId]);

  // Lọc danh sách consultation theo search và role
  const filteredConsultations = consultations.filter(c =>
    (role === 'Expert' ? c.user_name : c.expert_name).toLowerCase().includes(search.toLowerCase())
  );

  // Consultation được chọn
  const selectedConsultation = consultations.find(c => c.id === selectedConsultationId);

  // Gửi tin nhắn qua API backend
  const handleSend = () => {
    if (!input.trim() || !selectedConsultationId || !selectedConsultation) return;

    const newMessage = {
      consultation_id: selectedConsultationId,
      expert_id: Number(selectedConsultation.expert_user_id),
      message: input.trim(),
      sender_type: role === 'Expert' ? 'Expert' : 'Student',
      user_id: currentUserId,
    };

    axios
      .post(`${API_URL}/api/chat/messages`, newMessage)
      .then(() => setInput(''))
      .catch(err => {
        console.error('Failed to send message:', err);
        alert('Gửi tin nhắn thất bại, vui lòng thử lại.');
      });
  };

  return (
    <MainLayout>
      <div className="chatsystem-page">
        <aside className="chatsystem-sidebar">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="chatsystem-sidebar-search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <h3>Hộp thư</h3>
          <ul>
            {filteredConsultations.map(c => (
              <li
                key={c.id}
                className={selectedConsultationId === c.id ? 'chatsystem-sidebar-item active' : 'chatsystem-sidebar-item'}
                onClick={() => setSelectedConsultationId(c.id)}
              >
                <div className="chatsystem-sidebar-text">
                  <span className="chatsystem-sidebar-name">
                    {role === 'Student' ? c.expert_name : c.user_name}
                  </span>
                  <span className="chatsystem-sidebar-lastmsg">{c.reason}</span>
                  <small style={{ color: 'black' }}>{new Date(c.created_at).toLocaleString()}</small>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <div className="chatsystem-chat-container">
          <header className="chatsystem-chat-header">
            {/* Hide the back button for Expert role */}
            {role !== 'Expert' && (
              <IconButton onClick={() => navigate('/expert')} sx={{ color: '#0d6efd' }}>
                <ArrowBackIcon />
              </IconButton>
            )}
            <h2>
              {selectedConsultation
                ? role === 'Expert'
                  ? selectedConsultation.user_name
                  : selectedConsultation.expert_name
                : 'Chọn cuộc hội thoại'}
            </h2>
          </header>

          <div className="chatsystem-chat-messages">
            {messages.length === 0 && <p>Không có tin nhắn nào</p>}
            {messages.map(msg => (
              <div
                key={msg.timestamp + msg.message}
                className={`chatsystem-chat-message ${
                  msg.sender_type === (role === 'Expert' ? 'Expert' : 'Student') ? 'me' : 'expert'
                }`}
              >
                <div className="chatsystem-message-content">{msg.message}</div>
                <div className="chatsystem-message-timestamp">
                  {typeof msg.timestamp === 'number' ? new Date(msg.timestamp).toLocaleString() : msg.timestamp}
                </div>
              </div>
            ))}
          </div>

          <div className="chatsystem-chat-input">
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
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
