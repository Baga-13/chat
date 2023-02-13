"use client";
import { signIn, signOut } from "next-auth/react";
// server side stuff imported in small letter camel case
// import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11a37f] h-screen flex flex-col items-center text-center justify-center">
      <img src="./chat.png" alt="logo" className="" />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign in to use ChatGPT
      </button>
    </div>
  );
}

export default Login;

