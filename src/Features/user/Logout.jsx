import { getLocalStorage, setLocalStorage } from "./LocalStorage2";

export const handleLogout = () => {
  const users = getLocalStorage();
  const token = localStorage.getItem("token");
  console.log(users);
  if (!token) {
    console.log("No token found. User already logged out.");
    return;
  }
  const loginUser = users.map((user) =>
    user.token === token ? { ...user, token: null } : user
  );

  setLocalStorage(loginUser);

  localStorage.removeItem("token");
};
export default handleLogout;
