import React from "react";
import ExpertBar from "./expertbar";
import "./Styles/tinnhan.css";

const chats = [
  {
    id: 1,
    name: "Jennifer Markus",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    message: "Hey! Did you finish the Hi-FI wireframes for flora app design?",
    time: "Today | 05:30 PM",
    active: false,
  },
  {
    id: 2,
    name: "Iva Ryan",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    message: "Hey! Did you finish the Hi-FI wireframes for flora app design?",
    time: "Today | 05:30 PM",
    active: true,
  },
  {
    id: 3,
    name: "Jerry Helfer",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    message: "Hey! Did you finish the Hi-FI wireframes for flora app design?",
    time: "Today | 05:30 PM",
    active: false,
  },
  {
    id: 4,
    name: "David Elson",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    message: "Hey! Did you finish the Hi-FI wireframes for flora app design?",
    time: "Today | 05:30 PM",
    active: false,
  },
];

const messages = [
  {
    id: 1,
    type: "receive",
    content: "Oh, hello! All perfectly.\nI will check it and get back to you soon",
    time: "04:45 PM",
  },
  {
    id: 2,
    type: "send",
    content: "Oh, hello! All perfectly.\nI will check it and get back to you soon",
    time: "04:45 PM",
  },
  {
    id: 3,
    type: "receive",
    content: "Oh, hello! All perfectly.\nI will check it and get back to you soon",
    time: "04:45 PM",
  },
  {
    id: 4,
    type: "send",
    content: "Oh, hello! All perfectly.\nI will check it and get back to you soon",
    time: "04:45 PM",
  },
  {
    id: 5,
    type: "receive",
    content: "voice",
    time: "04:45 PM",
    voice: true,
    voiceLength: "01:24",
  },
];

export default function TinNhan() {
  return (
    <div className="tinnhan-layout">
      <ExpertBar />
      <div className="tinnhan-main">
        <div className="tinnhan-panel">
          <div className="tinnhan-left">
            <div className="tinnhan-left-header">
              <span>All Messages <span className="tinnhan-down">&#9660;</span></span>
            </div>
            <div className="tinnhan-search-row">
              <input className="tinnhan-search" placeholder="Search or start a new chat" />
            </div>
            <div className="tinnhan-chat-list">
              {chats.map(chat => (
                <div key={chat.id} className={`tinnhan-chat-item${chat.active ? " active" : ""}`}>
                  <img className="tinnhan-chat-avatar" src={chat.avatar} alt={chat.name} />
                  <div className="tinnhan-chat-info">
                    <span className="tinnhan-chat-name">{chat.name}</span>
                    <span className="tinnhan-chat-msg">{chat.message}</span>
                    <span className="tinnhan-chat-time">
                      <span className="tinnhan-clock">&#128336;</span> {chat.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="tinnhan-divider" />
          <div className="tinnhan-right">
            <div className="tinnhan-right-header">
              <div className="tinnhan-right-user">
                <img className="tinnhan-user-avatar" src="https://randomuser.me/api/portraits/women/2.jpg" alt="Ammi Watts" />
                <span className="tinnhan-user-name">Ammi Watts</span>
              </div>
              <div className="tinnhan-right-actions">
                <button className="tinnhan-header-icon" title="Star"><svg width="22" height="22"><path d="M11 2l2.7 6.6 7.3.6-5.5 4.6 1.7 7.2-6.2-4-6.2 4 1.7-7.2-5.5-4.6 7.3-.6z" fill="#1976f7"/></svg></button>
                <button className="tinnhan-header-icon" title="Search"><svg width="22" height="22"><circle cx="10" cy="10" r="7" stroke="#bfc5ce" strokeWidth="2" fill="none"/><line x1="16" y1="16" x2="21" y2="21" stroke="#bfc5ce" strokeWidth="2" /></svg></button>
                <button className="tinnhan-header-icon" title="More"><svg width="22" height="22"><circle cx="6" cy="11" r="1.5" fill="#bfc5ce"/><circle cx="11" cy="11" r="1.5" fill="#bfc5ce"/><circle cx="16" cy="11" r="1.5" fill="#bfc5ce"/></svg></button>
              </div>
            </div>
            <div className="tinnhan-msg-list">
              {messages.map(msg => (
                <div key={msg.id} className={`tinnhan-msg-row ${msg.type}`}>
                  {msg.voice ? (
                    <div className="tinnhan-msg-bubble voice">
                      <svg className="tinnhan-voice-icon" width="28" height="28" viewBox="0 0 28 28">
                        <circle cx="14" cy="14" r="13" fill="#1976f7" />
                        <polygon points="12,10 20,14 12,18" fill="#fff" />
                      </svg>
                      <div className="tinnhan-voice-wave">
                        {/* Fake waveform */}
                        <div className="tinnhan-voice-bar" style={{height: "14px"}} />
                        <div className="tinnhan-voice-bar" style={{height: "20px"}} />
                        <div className="tinnhan-voice-bar" style={{height: "10px"}} />
                        <div className="tinnhan-voice-bar" style={{height: "20px"}} />
                        <div className="tinnhan-voice-bar" style={{height: "12px"}} />
                        <div className="tinnhan-voice-bar" style={{height: "18px"}} />
                        <div className="tinnhan-voice-bar" style={{height: "10px"}} />
                        <div className="tinnhan-voice-bar" style={{height: "16px"}} />
                      </div>
                      <span className="tinnhan-voice-length">{msg.voiceLength}</span>
                    </div>
                  ) : (
                    <div className={`tinnhan-msg-bubble ${msg.type}`}>
                      {msg.content.split('\n').map((line, i) => (
                        <span key={i}>{line}<br/></span>
                      ))}
                    </div>
                  )}
                  <span className="tinnhan-msg-time">{msg.time}</span>
                </div>
              ))}
            </div>
            <div className="tinnhan-input-row">
              <button className="tinnhan-input-icon smile"><svg width="26" height="26"><circle cx="13" cy="13" r="12" fill="#f5f6fa" stroke="#e3e6f0" strokeWidth="1"/><text x="8" y="18" fontSize="14" fill="#1976f7">&#128578;</text></svg></button>
              <input className="tinnhan-input" placeholder="Type your message here ..." />
              <button className="tinnhan-input-icon send"><svg width="24" height="24"><circle cx="12" cy="12" r="12" fill="#1976f7"/><polygon points="9,8 17,12 9,16" fill="#fff" /></svg></button>
              <button className="tinnhan-input-icon thumb"><svg width="24" height="24"><circle cx="12" cy="12" r="12" fill="#f5f6fa" stroke="#e3e6f0" strokeWidth="1"/><text x="7" y="18" fontSize="14" fill="#1976f7">&#128077;</text></svg></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}