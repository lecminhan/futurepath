import { useState } from "react";
import { sendMessageToBot } from "../services/chatbotService";
import { getUserId } from "../utils/useridUtils";
// Kiểu dữ liệu message
interface Message {
  content: string;
  sender: "user" | "bot";
  response?: string;
}

const useChatbot = (initialConversationId: number = 1) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [createNewConversation, setCreateNewConversation] = useState<boolean>(false);
  const [spamProtection, setSpamProtection] = useState<boolean>(false);
  const [conversationId, setConversationId] = useState<number>(initialConversationId); // ✅ Khởi tạo từ props
  const userId = getUserId();
  const addMessage = (content: string, sender: "user" | "bot", response?: string) => {
    setMessages((prevMessages) => [...prevMessages, { content, sender, response }]);
  };

  const showLoading = () => {
    addMessage("I'm thinking, please wait a moment...", "bot");
  };
const API_URL = import.meta.env.VITE_AN_API_URL;

  const hideLoading = () => {
    setMessages((prevMessages) =>
      prevMessages.filter((msg) => msg.content !== "I'm thinking, please wait a moment...")
    );
  };

  const handleSendMessage = async () => {
    const trimmedInput = userInput.trim();
    if (!trimmedInput || spamProtection) return;

    addMessage(trimmedInput, "user");
    setIsLoading(true);
    showLoading();

    try {
      const reply = await sendMessageToBot(trimmedInput);
      hideLoading();
      addMessage(reply, "bot", reply);
      await saveChatHistory(trimmedInput, reply);
      setUserInput("");
    } catch (error: unknown) {
      hideLoading();
      if (error instanceof Error) {
        addMessage(`Có lỗi xảy ra: ${error.message}`, "bot");
      } else {
        addMessage("Có lỗi xảy ra rồi, vui lòng thử lại", "bot");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const saveChatHistory = async (message: string, response: string) => {
    try {
      await fetch(`${API_URL}/api/conversation/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          messages: message,
          response: response,
          create_new_conversation: createNewConversation,
          current_conversation_id: conversationId,
        }),
      });
    } catch (error) {
      console.error("Error saving chat history:", error);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setUserInput("");
    setCreateNewConversation(false);
    setSpamProtection(false);
  };

  const handleNewChat = () => {
    if (spamProtection) {
      alert("Bạn không được bấm quá nhiều, vui lòng thử lại sau!");
      return;
    }

    setCreateNewConversation(true);
    setSpamProtection(true);

    setTimeout(() => {
      setCreateNewConversation(false);
      setSpamProtection(false);
    }, 10000);

    resetChat();
  };

  return {
    messages,
    userInput,
    setUserInput,
    isLoading,
    handleSendMessage,
    handleNewChat,
    resetChat,
    conversationId,
    setConversationId,
  };
};

export default useChatbot;