import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";

interface cardProps {
  title: string;
  size: string;
  location: string;
  price: string;
  address: string;
  link?: string;
  imageSrc: string;
  bedNo: string;
  bath: string;
  className?: React.ReactNode;height?:string
}
export const Card: React.FC<cardProps> = ({
  title,
  size,
  location,
  address,
  price,
  bedNo,
  imageSrc,
  link,
  height,
  bath,className
}) => {
  return (
    <div className="w-full ">
      <Link className=" " href={link || "#"}>
        <div className={`overflow-hidden relative group ${height}`}>
          <Image
          width={1000}
          height={1000}
            className={`w-full h-full object-cover object-center  transform transition-transform duration-300 ease-in-out group-hover:scale-110 ${className}`}
            src={imageSrc}
            alt=""
          />
        </div>

        <div className="px-6 py-4 border shadow-xl">
          <p className="mb-3 text-sm gap-3 grid grid-cols-2">
            <span className="text-green line-clamp-1">{title}</span>
            <span className="text-md font-bold text-green text-end">
              {price}
            </span>
          </p>
          <p className="mb-3 text-sm gap-3 grid grid-cols-3">
            <span>{size} sqft</span>
            <span className="flex gap-2">{bedNo} bed</span>
            <span>{bath} bath</span>
          </p>
          <div className=" border-t border-dashed">
            <div className="mt-3 flex justify-between items-center">
              <p className="text-green flex items-center gap-2">
                <CiLocationOn className="text-green" size={22} />
                {address}
              </p>
              <span>
                <IoHeartOutline size={22} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
