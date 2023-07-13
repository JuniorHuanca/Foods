import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 py-4 md:h-[10vh]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-center md:text-left mb-3 md:mb-0 h-full">
          <p>© {year} SmartEats - Junior Huanca</p>
        </div>

        <div className="text-white text-center md:text-right h-full">
          <Link
            href="/"
            className="block md:inline mx-2 mb-2 md:mb-0 hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block md:inline mx-2 mb-2 md:mb-0 hover:text-gray-400"
          >
            Products
          </Link>
          <Link
            href="/me"
            className="block md:inline mx-2 mb-2 md:mb-0 hover:text-gray-400"
          >
            About Me
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
