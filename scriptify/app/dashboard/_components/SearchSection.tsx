import React from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image'; // Assuming you're using Next.js Image component for optimized images

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-10 bg-gradient-to-br from-black via-gray-800 to-black flex flex-col justify-center items-center text-white font-[Open_Sans]">
      {/* Container for logo, heading, and project info */}
      <div className="flex justify-between items-center w-full max-w-screen-xl px-5 space-x-4">

        {/* Left Section: Logo (Huge size) */}
        <div className="flex-shrink-0 ml-[-30px]">  {/* Adjusted margin-left */}
          <Image src="/logo.svg" alt="Logo" width={250} height={250} />
        </div>

        {/* Center Section: Browse All Templates */}
        <div className="flex-grow text-center mx-10">
          <h2 className="text-4xl font-bold">Browse All Templates</h2>
          <p className="mt-2 text-lg text-gray-300">What would you like to create today?</p>
        </div>

        {/* Right Section: Project Info (Name and Email) in Black Gradient */}
        <div className="flex-shrink-0 text-right">
          <div className="p-4 bg-gradient-to-br from-black via-gray-900 to-black rounded-lg shadow-lg">
            <h1 className="text-xl font-bold">Project by Sai Shreya Jillella</h1>
            <p className="mt-2 text-sm text-gray-400">
              Email: <a href="mailto:saishreyajillella@gmail.com" className="text-blue-400">saishreyajillella@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="flex flex-col items-center gap-2 mt-4 w-full max-w-md">
        {/* Search Bar */}
        <div className="flex gap-2 items-center p-2 border rounded-md bg-gray-700 w-full">
          <Search className="text-gray-300" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent text-gray-100 w-full"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
