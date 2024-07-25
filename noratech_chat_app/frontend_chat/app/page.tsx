"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/chat.css';  // 追加: CSSファイルのインポート

interface Message {
  sender: string;
  content: string;
  timestamp: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const response = await axios.get("http://localhost:8000/get-messages/");
    setMessages(response.data);
  };

  const sendMessage = async () => {
    await axios.post("http://localhost:8000/send-message/", {
      sender: "User",
      content: newMessage,
      timestamp: new Date().toISOString()
    });
    setNewMessage("");
    fetchMessages();
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === "User" ? "user-message" : "other-message"}`}>
            <div className="message-icon"></div>
            <div className="message-content">{msg.content}</div>
            <div className="message-timestamp">{formatTime(msg.timestamp)}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="メッセージを入力"
        />
        <button onClick={sendMessage}></button>
      </div>
    </div>
  );
}
