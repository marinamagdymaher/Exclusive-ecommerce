import { createContext, useContext, useState } from "react";

import {
  getLocalStorage,
  setLocalStorage,
} from "../../Features/user/LocalStorage2";
import { generateToken } from "../../Features/user/GenerateToken";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [token, setToken] = useState();

  const handleSubmitLogin = () => {
    const { email, password } = login;
    // Input validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const users = getLocalStorage();

      const loginUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (loginUser) {
        const token = generateToken(loginUser);
        const updatedUser = [{ ...loginUser, token }];
        console.log(updatedUser);
        setLocalStorage(updatedUser);
        localStorage.setItem("token", token);
        setToken(token);
        setSuccessMessage("Login successful!");
        console.log("Login successful!");
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setError("Invalid email or password.");
      setSuccessMessage(null);
    }
  };
  const [visibility, setVisibility] = useState(false);
  return (
    <UserContext.Provider
      value={{
        login,
        setLogin,
        error,
        token,
        successMessage,
        handleSubmitLogin,
        visibility,
        setVisibility,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
