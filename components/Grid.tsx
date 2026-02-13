"use client";
import { useState } from "react";
import { gridItems } from "../data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";

const Grid = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('sumitvermaofficial@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-20">
      <h1 className="heading mb-10">
        About <span className="text-purple">Me</span>
      </h1>
      <p className="text-center text-white-100 mb-10 text-sm md:text-base max-w-3xl mx-auto">
        Full Stack React Native Developer with expertise in building scalable mobile applications
      </p>

      {/* Pair-wise grid layout: 2 cards on large screens, 1 on mobile */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
        {gridItems?.map((item) => (
          <div
            key={item.id}
            className="bg-black-200 rounded-lg p-6 md:p-8 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300 group"
          >
            <div className="flex flex-col h-full">
              {item.img && (
                <div className="mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-white-100 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Copy Email Button */}
      <div className="flex justify-center mt-10">
        <MagicButton
          title={copied ? "Email copied!" : "Copy my email"}
          icon={<IoCopyOutline />}
          position="left"
          otherClasses="!bg-[#161a31]"
          handleClick={handleCopy}
        />
      </div>
    </section>
  );
};

export default Grid;