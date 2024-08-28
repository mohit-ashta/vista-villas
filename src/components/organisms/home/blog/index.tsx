import Image from "next/image";
import React from "react";

export const Blog = () => {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <p className="tracking-tight text-gray-700 mb-4">Our Blog</p>
        <h1 className="text-5xl md:text-6xl font-heading tracking-tight font-medium mb-10">
          Latest home Blog
        </h1>
        <div className="grid grid-cols-2 gap-8">
          <div className="px-4 ppt-4 pb-7 shadow-xl group rounded-lg">
            <div className="relative overflow-hidden ">
              <Image
                className="mb-6 object-cover object-center rounded-2xl  transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                src="/images/home1.avif"
                width={1000}
                height={1000}
                alt="home"
              />
              <p className="text-green font-semibold text-xl  absolute bottom-0 bg-white p-3 right-0 rounded-tl-xl w-60">
                #1 Trending
              </p>
            </div>
            <p className="text-gray-600 text-xs font-medium mb-4">
              2bhk + Rented + Sale Home Ready
            </p>
            <a href="#" className="text-lg hover:underline">
              urvived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop
            </a>
          </div>
          <div className="px-4 ppt-4 pb-7 shadow-xl group rounded-lg">
            <div className="relative overflow-hidden ">
              <Image
                className="mb-6 object-cover object-center rounded-2xl  transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                src="/images/home1.avif"
                width={1000}
                height={1000}
                alt="home"
              />
              <p className="text-green font-semibold text-xl absolute bottom-0 bg-white p-3 right-0 rounded-tl-xl w-80">
                #2 Trending
              </p>
            </div>
            <p className="text-gray-600 text-xs font-medium mb-4">
              2bhk + Rented + Sale Home Ready
            </p>
            <a href="#" className="text-lg hover:underline">
              urvived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop
            </a>
          </div>
          <div className="px-4 ppt-4 pb-7 shadow-xl group rounded-lg">
            <div className="relative overflow-hidden ">
              <Image
                className="mb-6 object-cover object-center rounded-2xl  transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                src="/images/home1.avif"
                width={1000}
                height={1000}
                alt="home"
              />
              <p className="text-green font-semibold text-xl  absolute bottom-0 bg-white p-3 right-0 rounded-tl-xl w-80">
                #11 Trending
              </p>
            </div>
            <p className="text-gray-600 text-xs font-medium mb-4">
              2bhk + Rented + Sale Home Ready
            </p>
            <a href="#" className="text-lg hover:underline">
              urvived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop
            </a>
          </div>
          <div className="px-4 ppt-4 pb-7 shadow-xl group rounded-lg">
            <div className="relative overflow-hidden ">
              <Image
                className="mb-6 object-cover object-center rounded-2xl  transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                src="/images/home1.avif"
                width={1000}
                height={1000}
                alt="home"
              />
              <p className="text-green font-semibold text-xl  absolute bottom-0 bg-white p-3 right-0 rounded-tl-xl w-80">
                #31 Trending
              </p>
            </div>
            <p className="text-gray-600 text-xs font-medium mb-4">
              2bhk + Rented + Sale Home Ready
            </p>
            <a href="#" className="text-lg hover:underline">
              urvived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
