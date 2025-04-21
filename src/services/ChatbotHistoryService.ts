import { ref, get, onChildAdded, onChildRemoved } from 'firebase/database';
import { database } from '../config/FirebaseConfig';

interface Message {
  sender: string;
  message: string;
  response: string;
}

export const getConversationById = async (conversationId: number) => {
  try {
    const conversationRef = ref(database, `ChatbotHistory/${conversationId}`);
    const snapshot = await get(conversationRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const chatHistory: Message[] = [];

      Object.values(data as { [key: string]: Message }).forEach((entry) => {
        chatHistory.push({
          sender: entry.sender,
          message: entry.message,
          response: entry.response,
        });
      });

      return chatHistory;
    } else {
      throw new Error(`No conversation found with ID: ${conversationId}`);
    }
  } catch (error) {
    console.error('Error fetching conversation:', error);
    throw error;
  }
};

// ✅ Lắng nghe tin nhắn mới
export const listenToNewMessages = (
  conversationId: number,
  updateMessages: (newMessage: Message) => void
) => {
  const conversationRef = ref(database, `ChatbotHistory/${conversationId}`);

  onChildAdded(conversationRef, (snapshot) => {
    const newMessage = snapshot.val();
    if (newMessage) {
      updateMessages({
        sender: newMessage.sender,
        message: newMessage.message,
        response: newMessage.response,
      });
    }
  });
};

// ✅ Lắng nghe khi tin nhắn bị xóa
export const listenToDeletedMessages = (
  conversationId: number,
  handleDeletedMessage: (deletedKey: string) => void
) => {
  const conversationRef = ref(database, `ChatbotHistory/${conversationId}`);

  onChildRemoved(conversationRef, (snapshot) => {
    const deletedKey = snapshot.key;
    if (deletedKey) {
      handleDeletedMessage(deletedKey);
    }
  });
};
