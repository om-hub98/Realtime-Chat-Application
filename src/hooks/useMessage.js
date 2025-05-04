import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { addMessage } from '../services/messageService';

export const useSendMessage = () => {
  const { currentUser } = useContext(AuthContext);

  const sendMessage = async (chatId, message, img) => {
    if (!message.trim() && !img) return;

    try {
      await addMessage(chatId, currentUser.uid, message, img);
    } catch (err) {
      console.error("Send message failed:", err);
    }
  };

  return { sendMessage };
};
