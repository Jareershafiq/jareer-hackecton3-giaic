"use client";
import Link from "next/link";
import { FiSearch, FiShoppingBag, FiMenu, FiX, FiHeart } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="px-6 md:px-16 w-full absolute top-0 z-50 bg-transparent lg:px-20">
      {/* Top Section with Logo */}
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-orange-500 w-full lg:text-center md:text-center">
          <span className="text-white">Food</span>tuck
        </h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <FiX
              className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FiMenu
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between">
        {/* Navigation Links */}
        <nav className="hidden md:flex md:flex-row space-x-8 text-white items-center w-full">
          {[
            { name: "Home", path: "/" },
            { name: "Menu", path: "/Menu" },
            { name: "Blog", path: "/blog" },
            { name: "Pages", path: "/pages" },
            { name: "About", path: "/about" },
            { name: "Shop", path: "/ShopList" },
            { name: "Contact", path: "/contact" },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="relative group hover:text-orange-500 transition duration-300 lg:text-xl"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right Section: Search, Wishlist, and Cart */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-40 py-2 px-4 bg-transparent border border-orange-500 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <FiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-orange-500 cursor-pointer" />
          </div>

          {/* Wishlist Icon */}
          <Link href="/Wishlist">
            <FiHeart className="text-white text-xl cursor-pointer hover:text-orange-500" />
          </Link>

          {/* Cart Icon */}
          <Link href="/ShoppingCart">
            <FiShoppingBag className="text-white text-xl cursor-pointer hover:text-orange-500" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-70 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={toggleMenu}
      >
        <div
          className={`absolute top-0 right-0 h-full w-3/4 bg-white p-8 shadow-lg transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col space-y-4 text-black">
            {[
              { name: "Home", path: "/" },
              { name: "Menu", path: "/Menu" },
              { name: "Blog", path: "/blog" },
              { name: "Pages", path: "/pages" },
              { name: "About", path: "/about" },
              { name: "Shop", path: "/ShopList" },
              { name: "Contact", path: "/contact" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="hover:text-orange-500 transition duration-300"
              >
                {link.name}
              </Link>
            ))}

            {/* Wishlist Link */}
            <Link href="/Wishlist">
              <div className="text-black hover:text-orange-500 transition duration-300">
                Wishlist
              </div>
            </Link>

            {/* Cart Link */}
            <Link href="/ShoppingCart">
              <div className="text-black hover:text-orange-500 transition duration-300">
                Cart
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
