import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ValidateForm from "./ValidateForm";
import { setLocalStorage, getLocalStorage } from "./LocalStorage2";

const FormRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    email: "",
    password: "",
    wishlist: [],
    cart: [],
  });

  const [error, setError] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateForm = ValidateForm(formData, setError);
    if (!validateForm) return;
    const existingUsers = getLocalStorage() || [];

    // Ensure existingUsers is an array
    if (!Array.isArray(existingUsers)) {
      console.error("Expected an array but received:", existingUsers);
      return;
    }

    const userExists = existingUsers?.some(
      (user) => user.email === formData.email
    );

    if (userExists) {
      alert("You already have an account!");
      return;
    }
    const updatedUsers = [...existingUsers, formData];

    setLocalStorage(updatedUsers);
    alert("Account Created Successfully!");
    navigate("/login");
  };

  return (
    <div className=" flex flex-col justify-center items-center gap-5 w-full md:w-1/2 p-8">
      <h4 className="text-2xl font-bold mb-4 text-left">Create an account</h4>
      <h6 className=" mb-6 text-left">Enter your details below</h6>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          onChange={handleInputChange}
          value={formData.name}
          type="text"
          placeholder="Name"
          name="name"
          className="w-full p-3 border-b border-black  focus:ring-2 focus:ring-red-400"
        />
        {error.name && <p className="text-red-200">{error.name}</p>}
        <input
          onChange={handleInputChange}
          value={formData.email}
          name="email"
          placeholder="Email or Phone Number"
          className="w-full p-3 border-b border-black  focus:ring-2 focus:ring-red-400"
        />
        {error.email && <p className="text-red-200">{error.email}</p>}
        <input
          value={formData.password}
          type="password"
          name="password"
          onChange={handleInputChange}
          placeholder="Password"
          className="w-full p-3 border-b border-black  focus:ring-2 focus:ring-red-400"
        />
        {error.password && <p className="text-red-200">{error.password}</p>}
        <button
          type="submit"
          className="w-full bg-red-200 hover:bg-red-600 text-white py-3 rounded-lg transition-all duration-200"
        >
          Create Account
        </button>
        <button
          // type="submit"
          className="w-full py-3 border border-black  rounded-lg transition-all duration-200"
        >
          Google SIgn up
        </button>
      </form>
      <p className="mt-4 text-grey-700">
        Already have an account?{" "}
        <NavLink to="/login" className="underline cursor-pointer">
          Log in
        </NavLink>
      </p>
    </div>
  );
};

export default FormRegister;
