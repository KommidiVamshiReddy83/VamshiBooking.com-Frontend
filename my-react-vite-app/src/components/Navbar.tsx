import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [addPlaceOpen, setAddPlaceOpen] = useState(false);

  return (
    <nav className="bg-gray-100 text-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-[60px] flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-end font-extrabold select-none">
          <span className="text-4xl md:text-5xl text-blue-700 drop-shadow-lg tracking-wide">Resto</span>
          <span className="text-2xl md:text-3xl text-gray-500 ml-1 mb-1">.com</span>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        {/* Menu */}
        <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:gap-10 items-center absolute md:static bg-gray-100 left-0 w-full md:w-auto px-[60px] md:px-0 transition-all duration-200 z-20 ${menuOpen ? 'top-16 flex' : 'top-[-500px] hidden md:flex'}`}>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors block py-2">Home</a>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => window.innerWidth >= 768 && setServicesOpen(true)}
            onMouseLeave={() => window.innerWidth >= 768 && setServicesOpen(false)}
          >
            <button
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors block py-2 w-full text-left flex items-center"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              type="button"
            >
              Our Services
              <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul
              className={`bg-white rounded shadow-lg absolute left-0 w-48 mt-2 z-30
                hidden group-hover:block
                ${servicesOpen ? 'block' : ''}
              `}
            >
              <li>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700">Hotels</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700">Guest Houses</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700">Service Apartments</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors block py-2">Contact Us</a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors block py-2">Log In</a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors block py-2">Register</a>
          </li>
          {/* Add your Place Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => window.innerWidth >= 768 && setAddPlaceOpen(true)}
            onMouseLeave={() => window.innerWidth >= 768 && setAddPlaceOpen(false)}
          >
            <button
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors block py-2 w-full text-left flex items-center"
              onClick={() => setAddPlaceOpen(!addPlaceOpen)}
              aria-haspopup="true"
              aria-expanded={addPlaceOpen}
              type="button"
            >
              Add your Place
              <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul
              className={`bg-white rounded shadow-lg absolute left-0 w-44 mt-2 z-30
                hidden group-hover:block
                ${addPlaceOpen ? 'block' : ''}
              `}
            >
              <li>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700">Log In</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700">Register</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;