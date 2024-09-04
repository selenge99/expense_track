import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <img src="./logo.svg" width={90} height={25} alt="Logo" />
      <h2>Welcome Back</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          className="w-full max-w-xs input input-bordered"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full max-w-xs input input-bordered"
        />
        <button className="btn btn-wide bg-[#0166FF] text-white">Log in</button>
      </div>
      <div>
        <span>Don't have account?</span>

        <button className="btn btn-link">Sign up</button>
      </div>
    </div>
  );
};

export default SignIn;
