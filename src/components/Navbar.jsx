import React from "react";

function Navbar() {
  return (
    <header className="bg-linear-to-r from-purple-500 via-indigo-400 to-pink-300">
      <nav className="lg:w-[80%] mx-auto flex justify-between items-center py-2">
        <a href="" className="font-bold text-2xl text-white text-shadow-2xs">
          Expenser
        </a>
        <ul className="flex justify-center items-center gap-x-3 text-white font-medium">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
