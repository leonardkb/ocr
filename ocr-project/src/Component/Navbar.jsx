// Navbar.jsx
import  { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-blue-500 p-4 text-white flex justify-between items-center fixed top-0 left-0 z-50 shadow-md">
      <h1 className="text-2xl font-bold hover:text-gray-200">Mark Down </h1>
      {/* Desktop and larger screens */}
      <div className="hidden md:flex space-x-8 text-xl">
        <a href="#" className="hover:text-gray-200">Home</a>
        <a href="#" className="hover:text-gray-200">About</a>
      </div>
      
      {/* Mobile view (hamburger icon) */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-blue-300 p-4 ${isMenuOpen ? "block" : "hidden"}`}
      >
        <a href="#" className="block text-white py-2 hover:bg-blue-600">Home</a>
        <a href="#" className="block text-white py-2 hover:bg-blue-600">About</a>
      </div>
    </nav>
  );
}

export default Navbar;

