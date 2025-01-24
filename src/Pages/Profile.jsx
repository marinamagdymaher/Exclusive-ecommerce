import LinkProfile from "../Features/profile/LinkProfile";
import ProfileForm from "../Features/profile/ProfileForm";
import { getLocalStorage } from "../Features/user/LocalStorage2";

export default function Profile() {
  return (
    <div className="px-5 py-9">
      <div className="mt-9 py-9  flex justify-between">
        <LinkContact />
        <UserName />
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <LinkProfile />
        <ProfileForm />
      </div>
    </div>
  );
}

function LinkContact() {
  return (
    <>
      <pre className="font-bold text-grey-400">
        {" "}
        Home
        <span className="text-black"> / My Account </span>
      </pre>
      <pre></pre>
    </>
  );
}

function UserName() {
  const users = getLocalStorage();
  const loginUser = users.map((user) => (user.token !== null ? user.name : ""));
  return (
    <pre>
      Welcome!
      <span className="text-red-200 font-bold"> {loginUser}</span>
    </pre>
  );
}
