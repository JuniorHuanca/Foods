import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-4 md:h-[10vh] bg-black/50 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-3 md:mb-0 h-full">
          <p>© {year} SmartEats - Junior Huanca</p>
        </div>

        <div className="text-center md:text-right h-full">
          <Link
            href="/"
            className="block md:inline mx-2 mb-2 md:mb-0"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block md:inline mx-2 mb-2 md:mb-0"
          >
            Products
          </Link>
          <Link
            href="/aboutMe"
            className="block md:inline mx-2 mb-2 md:mb-0"
          >
            About Me
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
