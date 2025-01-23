import { getLocalStorage, setLocalStorage } from "./LocalStorage2";

export const handleLogout = () => {
  const users = getLocalStorage();
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("No token found. User already logged out.");
    return;
  }

  const updatedUsers = users.map((user) =>
    user.token === token ? { ...user, token: null } : user
  );
  console.log(updatedUsers);
  setLocalStorage(updatedUsers);

  localStorage.removeItem("token");

};
export default handleLogout;
