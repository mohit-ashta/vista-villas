import React, { useState, ReactNode } from "react";

interface TabProps {
  labels: string[];
  children: ReactNode[];
}

export const Tab: React.FC<TabProps> = ({ labels, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="container">
      <div className="flex items-center bg-[#4E95A6] justify-center py-3 gap-20">
        {labels.map((label, index) => (
          <span
            key={index}
            className={`cursor-pointer text-white ${
              activeTab === index ? "font-bold border-b-2" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="mt-4">{children[activeTab]}</div>
    </section>
  );
};
