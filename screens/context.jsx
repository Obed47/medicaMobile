import React, { createContext, useState } from "react";

const UserIdContext = createContext();

const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState();

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};
const useUserId = () => {
  const context = React.useContext(UserIdContext);
  if (!context) {
    throw new Error("useUserId must be used within a UserIdProvider");
  }
  return context;
};
export { UserIdContext, UserIdProvider, useUserId };
