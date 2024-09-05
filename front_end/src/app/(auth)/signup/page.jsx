"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import next from "next";
import Link from "next/link";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSignup = async () => {
    console.log("name", name);
    console.log("Email", email);
    console.log("Password", password);
    console.log("Repassword", repassword);

    if (password === repassword) {
      const response = await axios.post("http://localhost:8008/auth/signup", {
        name: name,
        email: email,
        password: password,
      });
      if (response.status === 201) {
        router.push("/signin");
      }
    } else {
      alert("Nuuts ug tohirohgui baina6");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h2>Create Geld account</h2>
      <div className="flex flex-col gap-4">
        <img src="./logo.svg" width={90} height={25} alt="Logo" />
        <input
          type="text"
          placeholder="Name"
          className="w-full max-w-xs input input-bordered"
          onChange={(ev) => {
            setName(ev.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full max-w-xs input input-bordered"
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full max-w-xs input input-bordered"
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Re-password"
          className="w-full max-w-xs input input-bordered"
          onChange={(ev) => {
            setRepassword(ev.target.value);
          }}
        />
        <button className="btn bg-[#0166FF] text-white" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
      <div>
        <span>Already have account?</span>
        <Link href="/signin">
          <button className="btn btn-link">Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
