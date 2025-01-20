import { useEffect } from "react";
import LoginForm from "./LoginForm";




export default function Login() {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex min-h-screen py-9">
      {/* Left Side - Image */}
      <LeftSide />
      {/* Right Side - Form */}
      <LoginForm />
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


