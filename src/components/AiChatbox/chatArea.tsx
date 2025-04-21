import React, { useEffect, useRef, useState } from 'react';
import { ref, onChildAdded, onChildRemoved, off } from 'firebase/database';
import { database } from '../../config/FirebaseConfig';
import useChatbot from '../../hooks/useChatbot';
import './styles/chatArea.css';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface FirebaseMessage {
  key: string;
  sender: string;
  content: string;
  response?: string;
}

interface ChatAreaProps {
  conversationId: number; // ✅ Truyền từ bên ngoài
}

const ChatArea: React.FC<ChatAreaProps> = ({ conversationId }) => {
  const {
    userInput,
    setUserInput,
    isLoading,
    handleSendMessage,
    setConversationId,
  } = useChatbot();

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<FirebaseMessage[]>([]);
  const [isChatStarted, setIsChatStarted] = useState(false);

  // 🔁 Cập nhật conversationId vào hook mỗi khi props thay đổi
  useEffect(() => {
    setConversationId(conversationId);
  }, [conversationId]);

  useEffect(() => {
    const conversationRef = ref(database, `ChatbotHistory/${conversationId}`);

    // Clear old messages when conversationId changes
    setMessages([]);

    // Listen to new messages
    onChildAdded(conversationRef, (snapshot) => {
      const newMessage = snapshot.val();
      const key = snapshot.key;

      if (newMessage && key) {
        setMessages((prevMessages) => {
          const exists = prevMessages.some((msg) => msg.key === key);
          if (!exists) {
            return [
              ...prevMessages,
              {
                key,
                sender: newMessage.sender === 'user' ? 'user' : 'bot',
                content: newMessage.message,
                response: newMessage.response,
              },
            ];
          }
          return prevMessages;
        });
      }
    });

    // Listen to deleted messages
    onChildRemoved(conversationRef, (snapshot) => {
      const deletedKey = snapshot.key;
      if (deletedKey) {
        setMessages((prevMessages) => prevMessages.filter((msg) => msg.key !== deletedKey));
      }
    });

    // Cleanup on unmount or conversationId change
    return () => {
      off(conversationRef);
    };
  }, [conversationId]);

  useEffect(() => {
    if (messages.length > 0) {
      setIsChatStarted(true);
    }
  }, [messages]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (messages.length > 0) {
      document.querySelector('.ai-title')?.classList.add('chat-started');
    }
  }, [messages]);

  const handleNewMessage = async () => {
    if (userInput.trim() !== '') {
      await handleSendMessage();
      setUserInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="ai-title">
        <img
          src="../../../public/images/chatbox.png"
          alt="Chat Icon"
          style={{ width: '45px', height: 'auto' }}
        />
        <div className="ai-text-title" style={{ fontWeight: '700', color: '#333' }}>
          FuturePath Chat
          <div style={{ fontWeight: '300', color: '#333', marginBottom: -1 }}>Ver 4.0</div>
        </div>
      </div>

      <div className="chat-area">
        <div className="chat-messages-container" ref={chatContainerRef}>
          {messages.map((message, index) => (
            <div
              key={message.key}
              className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              ref={index === messages.length - 1 ? lastMessageRef : null}
              style={{ display: 'block' }}
            >
              <div className="user-message">
                <div className="user-message-cover">{message.content}</div>
              </div>
              <div className="bot-lastchild">
                {message.response && <div className="bot-message">{message.response}</div>}
              </div>
            </div>
          ))}
        </div>

        <div className={`chat-message-input ${isChatStarted ? 'chat-started' : ''}`}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && userInput.trim() !== '' && !isLoading) {
                handleNewMessage();
              }
            }}
            className="message-input"
            placeholder="Ask anything"
          />
          <button className="ai-send-button" onClick={handleNewMessage} disabled={isLoading}>
            {isLoading ? <MoreHorizIcon /> : <SendIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;