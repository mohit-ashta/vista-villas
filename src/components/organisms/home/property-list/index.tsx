import React from "react";
import { Card } from "../../card";
import { propertyListData } from "@/constants/propertyListData";

export const PropertyList = () => {
  return (
    <section className="pt-20">
      <div className="container px-4 mx-auto">
        <div className="mb-20">
          <p className="tracking-tight text-gray-700 mb-4">Our Property</p>
          <h6 className="text-5xl md:text-6xl font-heading tracking-tight font-medium mb-10">
            Chandigarh Property
          </h6>
        </div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-3"></div>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {propertyListData.map((item) => (
            <Card height={"h-[257px]"}
              key={item.id}
              address={item.address}
              size={item.size}
              imageSrc={item.imageSrc}
              location={item.location}
              price={item.price}
              bedNo={item.bed || "N/A"}
              bath={item.bath || "N/A"}
              title={item.title}
            />
          ))}
        </div>
        <div className="text-center my-10">
          <button className="bg-green text-white px-3 py-2 rounded-sm">
            View All Property
          </button>
        </div>
      </div>
    </section>
  );
};
