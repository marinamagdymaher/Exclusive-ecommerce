import { useState } from "react";
import Button from "../../Components/Button";
import { getLocalStorage, setLocalStorage } from "../user/LocalStorage2";

export default function ProfileForm() {
  const users = getLocalStorage();
  const loginUser = users.find((user) => user.token !== null);

  console.log(loginUser);
  const [formData, setFormData] = useState({
    firstName: loginUser?.firstName || "",
    lastName: loginUser?.lastName || "",
    name:
      loginUser.firstName && loginUser.lastName
        ? `${loginUser.firstName && loginUser.lastName}`
        : "",
    email: loginUser?.email || "",
    address: loginUser?.address || "",
    currentPassword: loginUser.password || "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleChangeData = () => {
    // Validate data and update local storage
    const updatedUser = {
      ...loginUser,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      address: formData.address,
    };

    const updatedUsers = users.map((user) =>
      user.token === loginUser.token ? updatedUser : user
    );

    setLocalStorage(updatedUsers);
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-md">
      <h4 className="text-red-200 text-xl font-semibold text-red-600 mb-6">
        Edit Your Profile
      </h4>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* Name Fields */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <label
              htmlFor="firstName"
              className="block mb-2 font-medium text-grey-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="w-full p-3 bg-grey-100 rounded-md focus:outline-none focus:ring-2 "
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="lastName"
              className="block mb-2 font-medium text-grey-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="w-full p-3 bg-grey-100 rounded-md focus:outline-none focus:ring-2"
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full p-3 bg-grey-100 rounded-md focus:outline-none focus:ring-2"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="address"
              className="block mb-2 font-medium text-grey-700"
            >
              Address
            </label>
            <input
              id="address"
              type="text"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="w-full p-3 bg-grey-100 rounded-md focus:outline-none focus:ring-2"
            />
          </div>
        </div>

        {/* Password Change Fields */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 font-medium text-grey-700"
          >
            Password Changes
          </label>
          <div className="space-y-4">
            <input
              id="currentPassword"
              type="password"
              value={formData.currentPassword}
              onChange={handleInputChange}
              placeholder="Current Password"
              className="w-full p-3 bg-grey-100 rounded-md focus:outline-none focus:ring-2"
            />
            <input
              id="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleInputChange}
              placeholder="New Password"
              className="w-full p-3 bg-grey-100 rounded-md focus:outline-none focus:ring-2"
            />
            <input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm New Password"
              className="w-full p-3 bg-grey-100 rounded-md focus:outline-none focus:ring-2"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-start gap-4">
          <Button
            colorBgButton="bg-grey-200"
            colorText="text-black"
            buttonTitle="Cancel"
            onClick={() => setFormData({ ...formData, ...loginUser })}
          />
          <Button buttonTitle="Save Changes" handleButton={handleChangeData} />
        </div>
      </form>
    </div>
  );
}
