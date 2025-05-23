// Navbar.jsx
import  { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-gray-2000 p-7 text-white flex justify-between
     items-center fixed top-0 left-0 z-50 shadow-md">
      <h1 className="text-2xl font-bold text-black hover:text-gray-200">MarkSnap</h1>
      {/* Desktop and larger screens */}
      <div className="hidden md:flex space-x-8 text-xl text-black">
        <Link to="/" className="block text-black py-2 ">Home</Link>
        <Link to="/about" className="block text-black py-2 ">About</Link>
      </div>
      
      {/* Mobile view (hamburger icon) */}
      <button
        className="md:hidden text-black focus:outline-none"
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
        className={`md:hidden absolute top-16 left-0 w-full bg-gray-200 rounded-b-lg p-4 ${isMenuOpen ? "block" : "hidden"}`}
      >
        <Link to="/" className="block text-black py-2 ">Home</Link>
        <Link to="/about" className="block text-black py-2 ">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;

