import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { createChat, getChatById, searchUserByName, updateUserChat } from "../services/searchService";

export const useSearchUser = () => {
    const { setSelectedUser, setChatId } = useContext(ChatContext);
    const { currentUser } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);

    const handleSearch = async (searchUser) => {
        console.log("Search User from hook : ", searchUser);
        if (!searchUser.trim()) return;

        try {
            const snapshot = await searchUserByName(searchUser.trim());
            if (snapshot.empty) {
                setUser(null);
                setError(true);
                return;
            } else {
                snapshot.forEach((doc) => {
                    const userData = { ...doc.data(), uid: doc.id };
                    setUser(userData);
                    //setUser(doc.data());
                    setError(false);
                    console.log("User found from Hooks: ", userData);
                    
                });
            }
        } catch (err) {
            console.error("Error searching user:", err);
            setError(true);
            setUser(null);
        }
    };

    const handleSelectUser = async () => {
        const chatId = [currentUser.uid, user.uid].sort().join("_");

        try {
            const chatDoc = await getChatById(chatId);
            if (!chatDoc.exists()) {
                await createChat(chatId);
                updateUserChat(currentUser.uid, chatId, currentUser.displayName, currentUser.photoURL);
                updateUserChat(user.uid, chatId, user.displayName, user.photoURL);
            }

            setChatId(chatId);
            setSelectedUser(user);
        } catch (err) {
            console.error("Error creating chat:", err);
        }
    };

    return { user, error, handleSearch, handleSelectUser };


}