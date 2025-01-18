// import { NavLink, useNavigate } from "react-router-dom";
// import { validateEmail } from "../../Utils/Utils";
// import useLocalStorage from "./LocalStorage";

import { useEffect } from "react";
import FormRegister from "./FormRegister";

export default function Register() {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen py-9">
      {/* Left Side - Image */}
      <LeftSide />
      {/* Right Side - Form */}
      <FormRegister />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="hidden md:block w-1/2">
      <img
        src="/Side Image.png"
        alt="Side"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
