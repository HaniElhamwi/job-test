import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="relative">
      <Image
        src="/header.jpg"
        alt="header"
        width={0}
        height={0}
        sizes="100vw"
        className="min-w-full h-[500px]"
      />
      <div className="bg-black w-full h-full bg-opacity-40 absolute left-0 top-0"></div>

      {/* text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold">Welcome to our characters site</h1>
        <p className="text-lg mt-4">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Header;
