import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatId, setChatId] = useState(null);

  return (
    <ChatContext.Provider value={{ selectedUser, setSelectedUser, chatId, setChatId }}>
      {children}
    </ChatContext.Provider>
  );
};
