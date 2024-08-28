import React from "react";
import { UserFooterMenu, bottomMenu } from "@/constants/common-routes";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

export const Footer = () => {
  const getYear = new Date();
  const year = getYear.getFullYear();
  return (
    <section className="pt-20 pb-10 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          {UserFooterMenu.map((item, id) => (
            <div className="w-full md:w-1/2 lg:w-1/5 p-3">
              <h3 className="mb-2 text-cyan-900 font-semibold">{item.title}</h3>
              <ul>
                {item.submenu?.map((item, id) => (
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-sm font-medium text-gray-900 hover:text-opacity-60 transition duration-300"
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr />
        <div className="flex flex-wrap items-center justify-between mt-5">
          <div className="w-auto p-4">
            <div className="flex flex-wrap -m-4">
              <Link href={"/"} className="flex flex-wrap">
                <IoHomeOutline size={22} />
                <h5 className="text-lg font-medium ml-2">Vista Villa</h5>
              </Link>
            </div>
          </div>
          <div className="w-auto p-4">
            <ul className="flex flex-wrap -m-5">
              {bottomMenu.map((item, id) => (
                <li className="p-5" key={id}>
                  <Link
                    className="inline-block font-medium text-gray-900 "
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
