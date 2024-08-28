import { UserHeaderMenu } from "@/constants/common-routes";
import React from "react";
import { IoCall, IoNewspaperOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiFileDownloadFill } from "react-icons/ri";
import { PiBookFill } from "react-icons/pi";
export const SubHeader = () => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center text-end gap-10 justify-between text-cream">
        <div className="text-start cursor-pointer">
          <div className="flex items-center">
            <FaCloudDownloadAlt size={22}  className="text-cream"/>
            <span className="ml-2">Download App</span>
          </div>
        </div>
        <div className="text-start  cursor-pointer whitespace-nowrap">
          <div className="flex items-center">
            <PiBookFill size={22} className="text-cream"/>
            <span className="ml-2">Saved</span>
          </div>
        </div>
        <div className="text-start  cursor-pointer whitespace-nowrap">
          <div className="flex items-center">
            <IoNewspaperOutline size={22} className="text-cream"/> <span className="ml-2">Blog</span>
          </div>
        </div>
      </div>{" "}
      <ul className="hidden lg:flex items-center space-x-6 mr-6 text-cream">
        {UserHeaderMenu.map((item) => (
          <div key={item.id}>
            {item.dropDown ? (
              <>
                <li
                  className="relative group p-2 cursor-pointer flex pl-4"
                  key={item.id}
                >
                  <div className="flex items-center whitespace-nowrap">
                    {item.title} <IoMdArrowDropdown size={22} />
                  </div>
                  <div className="absolute top-full left-0 hidden group-hover:block text-green bg-cream shadow-lg  border-gray-200">
                    <ul className="min-w-[200px]">
                      {item.submenu?.map((item, id) => (
                        <li
                          className="ml-0 px-4 py-2 hover:bg-green hover:text-white"
                          key={id}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li key={item.id} className="cursor-pointer whitespace-nowrap">
                  {item.title}
                </li>
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};
