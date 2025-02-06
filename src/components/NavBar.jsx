import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

const linkClasses =
  "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";

const NavLink = ({ to, onClick, children }) => (
  <li>
    <Link
      to={to}
      onClick={onClick}
      className={`${linkClasses}`}
      aria-current="page"
    >
      {children}
    </Link>
  </li>
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-green-900  fixed top-0 w-full z-50">
        <div className="flex flex-wrap justify-between items-center p-1 mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="./dist/17838.jpg"
              className="mr-3 h-6 sm:h-9"
              alt="dev logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Eduvision
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              onClick={toggleOpen}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${isOpen ? "block" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <NavLink to="/" onClick={toggleOpen}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={toggleOpen}>
                About
              </NavLink>
              <NavLink to="/courses" onClick={toggleOpen}>
                Courses
              </NavLink>
              <NavLink to="/resources" onClick={toggleOpen}>
                Resources
              </NavLink>
              <NavLink to="/quiz" onClick={toggleOpen}>
                Quiz
              </NavLink>
              <NavLink to="/contact" onClick={toggleOpen}>
                Contact Me
              </NavLink>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
