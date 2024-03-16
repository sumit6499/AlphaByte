
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo2.jpg";
import { FaXmark, FaBars } from "react-icons/fa6";
import Login from "./Login";
import Signup from "./Signup";

const NavBar = () => {
  const [isMenuopen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuopen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "FAQ", path: "faq" },
  ];

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
  };

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300 "
            : ""
        } `}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
            <img src={Logo} alt="logo" className="w-10 inline-block items-center" />
            <span className="text-[#263228]">PlaceMint</span>
          </a>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <button
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray-900"
              onClick={handleLoginClick}
            >
              Login
            </button>
            <button
              className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey"
              onClick={handleSignupClick}
            >
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button
              className="text-neutralDGrey focus:out-of-range: focus:text-gray-500"
              onClick={toggleMenu}
            >
              {isMenuopen ? <FaXmark className="h-6 w-6" /> : <FaBars className="h-6 w-6 " />}
            </button>
          </div>
        </div> 

        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuopen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-white hover:text-brandPrimary first:font-medium"
            >
              {link}
            </Link>
          ))}
        </div> 
      </nav>
      
      {/* Conditional rendering for login and signup components */}
      {showLogin && <Login />}
      {showSignup && <Signup />}
    </header>
  );
};

export default NavBar;
