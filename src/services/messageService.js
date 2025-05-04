import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export const addMessage = async (chatId, senderId, text, img) => {
  const messagesRef = collection(db, `chats/${chatId}/messages`);

  await addDoc(messagesRef, {
    text,
    senderId,
    timestamp: serverTimestamp(),
    ...(img && { img }) // Add image if exists
  });

};
