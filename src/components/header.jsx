import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold mr-1">JK</h1>
        <ul className="flex gap-6 text-sm md:text-base">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/about-me" className="hover:text-yellow-400 transition">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-yellow-400 transition">Projects</Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-yellow-400 transition">Skills</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
