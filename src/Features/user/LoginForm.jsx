import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "./LocalStorage2";
import { generateToken } from "./GenerateToken";
import { useUser } from "../../Components/Helper/UserContext";

export default function LoginForm() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  // const { setUser } = useUser();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [token, setToken] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
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
        setLocalStorage(updatedUser);
        localStorage.setItem("token", token);
        setToken(token);
        // setUser(updatedUser);
        setSuccessMessage("Login successful!");
        setError(null);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError("Invalid email or password.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center gap-8 w-full md:w-1/2 p-8">
      <h4 className="text-2xl font-bold mb-4 text-left">Log in to Exclusive</h4>
      <h6 className=" mb-6 text-left">Enter your details below</h6>
      {!token && (
        <form
          onSubmit={handleSubmitLogin}
          className="w-full max-w-sm space-y-4"
        >
          <input
            type="email"
            placeholder="Email or Phone Number"
            value={login.email}
            name="email"
            onChange={handleChange}
            className="w-full p-3 border-b border-black  focus:ring-2 focus:ring-red-400"
          />{" "}
          {error && <p className="text-red-200">{error}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
            className="w-full p-3 border-b border-black  focus:ring-2 focus:ring-red-400"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-48 bg-red-200 hover:bg-red-600 text-white py-3 rounded-lg transition-all duration-200"
            >
              Log In
            </button>
            <p className="mt-4 text-red-200">
              <NavLink className="cursor-pointer">Forget Password?</NavLink>
            </p>
          </div>
          {error && <p className="text-red-200 mt-4">{error}</p>}
          {successMessage && (
            <p className="text-green-500 mt-4">{successMessage}</p>
          )}
        </form>
      )}
    </div>
  );
}
