import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const clearToken = () => {
    setToken(null); // Clear token
    sessionStorage.removeItem("token"); // Clear sessionStorage if necessary
  };

  return {
    setToken: saveToken,
    token,
    clearToken,
  };
}
