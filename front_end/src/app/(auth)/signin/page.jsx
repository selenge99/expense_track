"use client";

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/utils/util";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("email", email);
  console.log("password", password);

  const handleSignin = async () => {
    try {
      const response = await axios.post(`${apiUrl}/auth/signin`, {
        email: email,
        password: password,
      });
      console.log("Success", response);
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("failed");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <img src="./logo.svg" width={90} height={25} alt="Logo" />
      <h2>Welcome Back</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          className="w-full max-w-xs input input-bordered"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full max-w-xs input input-bordered"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="btn btn-wide bg-[#0166FF] text-white"
          onClick={handleSignin}
        >
          Log in
        </button>
      </div>
      <div>
        <span>Don't have account?</span>

        <Link href="/signup">
          <button className="btn btn-link">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
