// Navbar.js
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-50 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg flex items-center">
          {/* Toggle Menu for Small Screens */}
          <div className="block sm:hidden flex items-center space-x-4">
            <button onClick={toggleMenu} className="text-white hover:text-gray-400 focus:outline-none">
              <FaBars />
            </button>
            {/* Login/Signup Buttons on Small Screens */}
            <Link href="/login"><button className="bg-gray-700 px-2 py-1 rounded">Log In</button></Link>
            <Link href="/signup"><button className="bg-gray-700 px-2 py-1 rounded">Sign Up</button></Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex space-x-4">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/music" className="hover:text-gray-400">Music Distribution</Link>
            <Link href="/team" className="hover:text-gray-400">Our Services</Link>
            <Link href="/support" className="hover:text-gray-400">Support</Link>
            <Link href="/contact" className="hover:text-gray-400">Contact us</Link>
          </div>
        </div>

        {/* Login/Signup Buttons on Medium and Larger Screens */}
        <div className="hidden sm:flex ml-auto space-x-4">
          <Link href="/login"><button className="bg-gray-700 px-4 py-2 rounded">Log In</button></Link>
          <Link href="/signup"><button className="bg-gray-700 px-4 py-2 rounded">Sign Up</button></Link>
        </div>

        {/* Toggle Menu Box */}
        {isOpen && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-black bg-opacity-50 py-2 px-4 rounded text-white">
            <div className="block py-2">
              <Link href="/" className="hover:text-gray-400">Home</Link>
            </div>
            <div className="block py-2">
              <Link href="/music" className="hover:text-gray-400">Music Distribution</Link>
            </div>
            <div className="block py-2">
              <Link href="/team" className="hover:text-gray-400">Our Team</Link>
            </div>
            <div className="block py-2">
              <Link href="/support" className="hover:text-gray-400">Support</Link>
            </div>
            <div className="block py-2">
              <Link href="/contact" className="hover:text-gray-400">Contact us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
