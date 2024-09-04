import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header>
      <div>
        <img src="" alt="" />
        <Link>
          <p>Dashboard</p>
        </Link>
        <Link>
          <p>Records</p>
        </Link>
      </div>
      <div>
        <button>Records</button>
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <button>Log out</button>
      </div>
    </header>
  );
};

export default Header;
