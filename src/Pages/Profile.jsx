import LinkProfile from "../Features/profile/LinkProfile";
import ProfileForm from "../Features/profile/ProfileForm";

export default function Profile() {
  return (
    <div className="px-5 py-9 ">
      <LinkContact />
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
      <pre className="py-9 mt-9 font-bold text-grey-400">
        {" "}
        Home  
        <span className="text-black"> / My Account </span>
      </pre>
      <pre></pre>
    </>
  );
}
