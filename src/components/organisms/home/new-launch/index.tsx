import { NewLaunchData } from "@/constants/new-launch";
import Image from "next/image";
import React from "react";

export const NewLaunch = () => {
  return (
    <div className="pb-24">
      <div className="bg-light-green container p-8  shadow-xl relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4">
          <span className="text-sm font-mono font-semibold bg-cream py-2 px-5 rounded-md">
            New Launch
          </span>
        </div>
        <div className="text-center">
          <h4 className="text-5xl font-semibold text-green">Vista Villa</h4>
          <p className="text-2xl font-semibold my-6">
            Encyclopedia For All New Projects
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {NewLaunchData.map((item, id) => (
            <div
              className="border p-6 flex items-center gap-4 rounded-xl bg-green shadow cursor-pointer"
              key={id}
            >
              <div className="w-10 h-10 rounded-full bg-cream p-2">
                <Image
                  width={1000}
                  height={1000}
                  alt="home"
                  src={item.imgSrc}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-cream font-bold">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
