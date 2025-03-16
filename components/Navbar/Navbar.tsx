import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="container mx-auto lg:px-2 px-5 lg:w-2/5 bg-amber-900">
      <div className="container flex items-center justify-between mx-auto">
        <div>
          <Link href={"/"} className="text-2xl font-medium">
            私のブログ
          </Link>
        </div>
        <div>
          <ul className="flex items-center text-sm py-4 gap-4">
            <li>
              <Link href="/" className="block px-4 py-2 hover:text-sky-900 transishon-all duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:text-sky-900 transishon-all duration-300">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:text-sky-900 transishon-all duration-300">
                Qiita
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
