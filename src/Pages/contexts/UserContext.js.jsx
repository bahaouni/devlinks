import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  // Initialize user state with values from localStorage or default values
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {
      imgSrc: '',
      email: '',
      firstname: '',
      lastname: ''
    };
  });

  // Update user data and save it to localStorage
  const updateUserData = (imgSrc, email, firstname, lastname) => {
    const updatedUser = { imgSrc, email, firstname, lastname };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  useEffect(() => {
    // Add any side effects here if needed
  }, [user]);

  return (
    <UserContext.Provider value={{ user, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
}
