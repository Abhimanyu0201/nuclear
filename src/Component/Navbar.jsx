import React, { useState } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full h-[14vh] relative flex items-center justify-center bg-white shadow-md">
      <div className="flex items-center justify-between w-[90%] md:w-[70%] h-full p-5">
        <div className="">
          <img className="w-56 h-full" src="/img/logo.png" alt="Logo" />
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-black hover:text-red-400 transition-colors focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`flex items-center space-x-10 text-xl font-normal font-['Gotham_light'] md:flex ${
            isMobileMenuOpen
              ? "flex-col absolute top-[14vh] left-0 w-full bg-white p-5 md:static md:flex-row"
              : "hidden"
          }`}
        >
          {["Solution", "Services", "Product", "Work", "Blog"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-black hover:text-red-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
