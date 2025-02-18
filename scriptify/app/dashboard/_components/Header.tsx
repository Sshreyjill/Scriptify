import { Search } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div
      className="p-4 shadow-sm border-b-2 flex justify-between items-center bg-white font-[Open_Sans]"
      style={{
        boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)", // Header background glow
      }}
    >
      {/* Logo Section */}
      <Link href="/">
        <div className="flex items-center gap-3 cursor-pointer">
          <Image src="/images/logo.svg" alt="Scriptify Logo" width={40} height={40} />
          <h1
            className="text-xl font-semibold text-gray-800"
            style={{
              textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)", // Logo text glow
            }}
          >
            Scriptify
          </h1>
        </div>
      </Link>

      {/* Search Bar */}
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white w-full md:w-96">
        <Search className="text-gray-500" />
        <input
          type="text"
          placeholder="Type to search..."
          className="outline-none w-full text-gray-700"
          style={{
            textShadow: "0 0 5px rgba(255, 255, 255, 0.8)", // Input text glow
          }}
        />
      </div>
    </div>
  );
}

export default Header;
