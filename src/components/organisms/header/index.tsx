import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { SubHeader } from "./sub-header";
import { IoHomeOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <nav className="pt-5 px-6 absolute w-full text-cream">
      <div className="container">
        <div className="flex items-center">
          <div className="flex items-center mr-auto">
            <IoHomeOutline size={22} />

            <h5 className="text-lg font-medium ml-2">Vista Villa</h5>
          </div>
          <div className="ml-auto lg:hidden">
            <button className="flex items-center">
              <FiMenu />
            </button>
          </div>
          <div className="lg:flex lg:w-auto lg:space-x-10 mr-4">
            <div className="hidden lg:flex items-center mr-auto pl-4 border  rounded-full">
              <button className="mr-2 text-gray-200 hover:text-gray-300">
                <IoSearchOutline size={26} />
              </button>
              <input
                className="pl-2 py-3 text-md text-green focus:outline-none rounded-full bg-transparent"
                type="text"
                placeholder="Type to search..."
              />
            </div>
          </div>
          <ul className="hidden lg:flex items-center space-x-6 mr-6 ">
            <li>
              <Link className="text-black" href="#">
                <IoIosNotifications size={22} className="text-cream" />
              </Link>
            </li>
          </ul>
          <div className="hidden lg:block">
            <button className="flex items-center">
              <Image
                className="w-10 h-10 mr-2 rounded-full object-cover object-right border"
                src="/images/profile-pic.jpg"
                alt="Thomas Brown"
                width={100}
                height={100}
              />
            </button>
          </div>
        </div>
        <hr className="mt-6 " />
        <SubHeader />
      </div>
    </nav>
  );
};
