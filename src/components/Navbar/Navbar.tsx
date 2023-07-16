"use client";
import Link from "next/link";
import { useState } from "react";
import ModeSelector from "../ModeSelector";

type Props = {};

const Navbar = (props: Props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="min-h-[10vh] bg-black/50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex flex-1 justify-between items-center">
            <div className="flex-shrink-0">
              <Link href="/" className=" font-bold text-xl">
                SmartEats
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md font-bold hover:text-green-600 transition duration-500 hover:border-b-2 border-green-600"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="px-3 py-2 rounded-md font-bold hover:text-green-600 transition duration-500 hover:border-b-2 border-green-600"
                >
                  Products
                </Link>
                <Link
                  href="/aboutMe"
                  className="px-3 py-2 rounded-md font-bold hover:text-green-600 transition duration-500 hover:border-b-2 border-green-600"
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <ModeSelector />
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-green-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-700"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className={`block h-6 w-6 ${
                  isMobileMenuOpen ? "hidden" : "block"
                }`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Menu open: "block", Menu closed: "hidden" */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-600 transition duration-500 hover:border-b-2 border-green-600"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-600 transition duration-500 hover:border-b-2 border-green-600"
          >
            Products
          </Link>
          <Link
            href="/aboutMe"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-600 transition duration-500 hover:border-b-2 border-green-600"
          >
            About Me
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-green-600">
          <div className="flex items-center px-5 sm:px-6">
            <ModeSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
