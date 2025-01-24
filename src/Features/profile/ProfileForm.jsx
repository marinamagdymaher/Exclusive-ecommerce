import Button from "../../Components/Button";
// import { getLocalStorage } from "../user/LocalStorage2";

export default function ProfileForm() {
  // const users = getLocalStorage();
  // const loginUser = users.map((user) => (user.token !== null ? user : ""));

  // console.log(loginUser);
  return (
    <div className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-md">
      <h4 className="text-xl font-semibold text-red-200 mb-6">
        Edit Your Profile
      </h4>
      <form className="space-y-6">
        {/* Name Fields */}
        <div className="flex  flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <label
              htmlFor="fname"
              className="block mb-2 font-medium text-grey-700"
            >
              First Name
            </label>
            <input
              id="fname"
              type="text"
              placeholder="Md"
              className="w-full p-3 bg-secondary  rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="lname"
              className="block mb-2 font-medium text-grey-700"
            >
              Last Name
            </label>
            <input
              id="lname"
              type="text"
              placeholder="Rimel"
              className="w-full p-3 bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-grey-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="rimel1111@gmail.com"
              className="w-full p-3 bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
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
              placeholder="Kingston, 5236, United States"
              className="w-full p-3 bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
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
              id="password"
              type="password"
              placeholder="Current Password"
              className="w-full p-3 bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-3 bg-secondary  rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full p-3 bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-start gap-4">
          <Button
            colorBgButton="bg-secondary"
            colorText="text-black"
            buttonTitle="Cancel"
          />
          <Button buttonTitle="Save Changes" />
        </div>
      </form>
    </div>
  );
}
