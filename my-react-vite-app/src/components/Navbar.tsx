import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC<{ userLoggedIn?: boolean }> = ({ userLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [addPlaceOpen, setAddPlaceOpen] = useState(false);

  return (
    <nav className="main-navbar bg-gradient-to-r from-blue-100 via-white to-purple-100/80 backdrop-blur-md shadow-lg rounded-b-xl border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-end font-extrabold select-none">
          <Link to="/" className="flex items-end">
            <span className="text-4xl md:text-5xl text-blue-700 drop-shadow-lg tracking-wide">Resto</span>
            <span className="text-2xl md:text-3xl text-gray-500 ml-1 mb-1">.com</span>
          </Link>
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
        <ul className={`flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 items-center absolute md:static bg-gray-100 left-0 w-full md:w-auto px-4 md:px-0 transition-all duration-200 z-20 ${menuOpen ? 'top-16 flex' : 'top-[-500px] hidden md:flex'}`}>
          <li>
            <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium transition-colors block py-2">
              Home
            </Link>
          </li>
          {/* Our Services Dropdown */}
          <li className="relative group">
            <button
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors block py-2 w-full text-left flex items-center"
              aria-haspopup="true"
              aria-expanded="false"
              type="button"
            >
              Our Services
              <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul className="bg-white rounded shadow-lg absolute left-0 w-48 mt-2 z-30 hidden group-hover:block">
              {/* Hotels with nested dropdown */}
              <li className="relative">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700 flex items-center justify-between peer"
                >
                  Hotels
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <ul className="bg-white rounded shadow-lg absolute left-full top-0 w-48 mt-0 ml-1 z-40 hidden peer-hover:block hover:block">
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Luxury Hotels</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Budget Hotels</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Boutique Hotels</a>
                  </li>
                </ul>
              </li>
              {/* Guest Houses with nested dropdown */}
              <li className="relative">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700 flex items-center justify-between peer"
                >
                  Guest Houses
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <ul className="bg-white rounded shadow-lg absolute left-full top-0 w-48 mt-0 ml-1 z-40 hidden peer-hover:block hover:block">
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Family Guest Houses</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Heritage Guest Houses</a>
                  </li>
                </ul>
              </li>
              {/* Service Apartments with nested dropdown */}
              <li className="relative">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700 flex items-center justify-between peer"
                >
                  Service Apartments
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <ul className="bg-white rounded shadow-lg absolute left-full top-0 w-48 mt-0 ml-1 z-40 hidden peer-hover:block hover:block">
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Short Stay</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Long Stay</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors block py-2">Contact Us</Link>
          </li>
          {!userLoggedIn && (
            <>
              <li>
                <Link
                  to="/user-login"
                  className="px-4 py-2 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700"
                >
                  Register
                </Link>
              </li>
              <li className="relative group">
                <button
                  className="text-gray-800 hover:text-blue-600 font-medium transition-colors block py-2 w-full text-left flex items-center"
                  aria-haspopup="true"
                  aria-expanded="false"
                  type="button"
                >
                  Add your Place
                  <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul
                  className="
                bg-white rounded shadow-lg absolute left-0 w-44 mt-2 z-30
                hidden group-hover:block
              "
                >
                  <li>
                    <Link
                      to="/admin-login"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700"
                    >
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700"
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;