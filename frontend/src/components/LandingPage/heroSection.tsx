import React, { ReactNode } from "react";

interface HeroTextAndCTAProps {
  children: ReactNode;
}

const HeroTextAndCTA: React.FC<HeroTextAndCTAProps> = ({ children }) => {
  return <div className="w-[90%] min-h-10 mt-[60px] flex gap-[80px]">{children}</div>;
};

export const HeroText = () => {
  return (
    <h1 className="text-black w-[54%] text-[65px] font-bold leading-normal">
      🌶️ Savor the Spice, Share the Smile! 😁
    </h1>
  );
};

export const HeroCTA = () => {
  return (
    <div className="flex w-[48%] flex-col gap-2">
      <p className="w-[90%] text-black mt-8">
        Spreading Joy, One Bite at a Time. Welcome to the heart and soul of
        delicious dining in Naija style! Dive into a world where flavor dances,
        and grins are the main course.
      </p>
    </div>
  );
};

export default HeroTextAndCTA;
