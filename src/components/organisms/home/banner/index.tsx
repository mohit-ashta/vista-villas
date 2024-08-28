import Link from "next/link";
import React from "react";

export const Banner = () => {
  return (
    <>
      <section className="bg-banner-img h-[900px]">
        <div className="w-full">
          <div className="container px-4 mx-auto">
            <div className="py-24 md:py-32 lg:py-48 xs:px-8 z-50">
              <div className="flex flex-col items-center text-center">
                <div className="py-1 px-3 bg-green rounded-xl uppercase text-xs text-cream font-bold tracking-widest mb-6">
                  Vista Villa Real-Estate
                </div>
                <h1 className="text-cream font-heading text-7xl font-semibold mb-2 ">
                  Vista Villa Premier
                  <br /> Real Estate Excellence
                </h1>
                <p className="text-cream mb-6 text-2xl">
                  Our team of over 11000 home sale join us and giving you the
                  best of modern home
                  <br /> to ensure you stay feel luxury, always.
                </p>
                <Link
                  className="px-6 py-3 bg-green rounded-sm text-lg  font-bold text-cream hover:bg-cream hover:text-green transition duration-500"
                  href="#"
                >
                  Reserve Your Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
