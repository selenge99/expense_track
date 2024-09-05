import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center max-w-[1200px] mx-auto justify-between py-4 ">
      <div className="flex gap-6 items-center">
        <img src="./logo.svg" width={90} height={25} alt="Logo" />
        <Link href="/dashboard">
          <p>Dashboard</p>
        </Link>
        <Link href="/records">
          <p>Records</p>
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <button className="btn bg-[#0166FF] text-white btn-sm">
          <FaPlus />
          Records
        </button>
        <div className="avatar w-12 h-12">
          <div className="w-24 rounded-full">
            <img
              src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk="
              alt=""
            />
          </div>
        </div>
        <button className="btn btn-sm">Log out</button>
      </div>
    </header>
  );
};

export default Header;
