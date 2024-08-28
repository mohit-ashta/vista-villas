import React from "react";

export const Stats = () => {
  return (
    <section className="relative py-20  overflow-hidden bg-cream">
      <div className="relative z-10 container px-4 mx-auto">
        <div className="mb-10 border-b border-white border-opacity-10">
          <h2 className="pb-10 text-6xl md:text-5xl xl:text-10xl text-green font-bold tracking-px-n leading-none md:max-w-3xl">
            Join the tribe & Get your Home successful
          </h2>
        </div>
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/3 p-8">
            <p className="mb-6 text-green font-semibold leading-normal">
              Satisfied Clients
            </p>
            <h3 className="mb-4 text-4xl md:text-8xl xl:text-4xl text-green font-bold tracking-px-n leading-none">
              84,900
            </h3>
            <p className="text-green font-medium leading-relaxed md:w-56">
              Flaro has garnered more than 15k+ users.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-8">
            <p className="mb-6 text-green font-semibold leading-normal">
              Downloads
            </p>
            <h3 className="mb-4 text-4xl md:text-8xl xl:text-4xl text-green font-bold tracking-px-n leading-none">
              3.2M+
            </h3>
            <p className="text-green font-medium leading-relaxed md:w-56">
              Flaro has garnered more than 15k+ users.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-8">
            <p className="mb-6 text-green font-semibold leading-normal">
              Customer Reviews
            </p>
            <h3 className="mb-4 text-4xl md:text-8xl xl:text-4xl text-green font-bold tracking-px-n leading-none">
              21,394
            </h3>
            <p className="text-green font-medium leading-relaxed md:w-56">
              Flaro has garnered more than 15k+ users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
