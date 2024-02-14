import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // For navigation links
import { IoIosClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const {cartItems} = useSelector( (state) => state.cart)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !sidebarRef.current.contains(event.target)) {
        toggleSidebar();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleSidebar, isOpen]);

  const SideNav = () => {
    return (
      <>
        <div
          className={`fixed top-0 right-0 z-50 w-full max-w-[280px] h-screen bg-gray-900 text-gray-200 dark:bg-gray-800 dark:text-gray-300 overflow-y-auto transform transition duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="text-xl font-bold">
              E-Commerce
            </Link>
            <button
              type="button"
              onClick={toggleSidebar}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-200 hover:bg-gray-700 dark:hover:bg-gray-700 focus:ring-offset-gray-800 dark:focus:ring-offset-gray-700">
              <IoIosClose size={20} />
            </button>
          </div>
          <div className="px-4 pt-4 pb-10 space-y-2">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-md font-medium text-left `}>
              Home
            </Link>
            <Link
              to={`/cart`}
              className={`block px-4 py-2 rounded-md font-medium text-left 
            `}>
              Cart
            </Link>

            <Link
              to="/products"
              className="block px-4 py-2 rounded-md font-medium text-left">
              All Products
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 rounded-md font-medium text-left">
              Contact Us
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <nav ref={sidebarRef} className="flex justify-between sticky w-full top-0 bg-white p-6 z-20">
      <Link to={""}>
        <div className="font-bold uppercase">E-Commerce</div>
      </Link>
        <ul className="sm:flex hidden  gap-6">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/products">
            <li>All Products</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      <div className="flex items-center gap-8">
        <div className="relative">
          <Link to="/cart">
            <FaCartPlus size={24} />
            <span className="absolute -top-2 left-7 font-bold text-green-500">{cartItems.length}</span>
          </Link>
        </div>
        <GiHamburgerMenu onClick={toggleSidebar} className="" size={30} />
      </div>
      {isOpen && <SideNav />}
    </nav>
  );
};

export default Header;
