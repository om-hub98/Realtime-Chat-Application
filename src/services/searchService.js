import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, where } from "firebase/firestore";
import { db } from "./firebase";

// Search user by display name
export const searchUserByName = async (displayName) => {
    const userRef = collection(db, "users");
    const q = query(userRef, where("displayName", "==", displayName));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
};

// Get chat by ID
export const getChatById = async (chatId) => {
    return await getDoc(doc(db, "chats", chatId));
};

// Create chat document
export const createChat = async (chatId) => {
    return await setDoc(doc(db, "chats", chatId), { message: [] });
};

export const updateUserChat = async (userId, chatId, displayName, photoURL) => {
    return await setDoc(doc(db, "userChats", userId), {
        [chatId]: {
            userInfo: {
                uid: userId,
                displayName: displayName,
                photoURL: photoURL,
            },
            date: serverTimestamp(),
        }
    });
};

