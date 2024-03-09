import React, { ReactNode } from "react";
import { ArrowSvg, FrontIcon } from "../../assets/svg";
import GradientButton from "../global/button";

interface HeroTextAndCTAProps {
  children: ReactNode;
}

const HeroTextAndCTA: React.FC<HeroTextAndCTAProps> = ({ children }) => {
  return <div className="w-[85%] min-h-10 mt-[70px] flex gap-[0px] justify-center md:flex-col">{children}</div>;
};

export const HeroText = () => {
  return (
    <h1 className="text-black w-[600px] md:w-[90%] md:text-[35px] text-[50px] font-bold leading-normal">
      🌶️ Savor the Spice, Share the Smile!😁
    </h1>
  );
};

export const HeroCTA = () => {
  return (
    <div className="flex w-[590px] md:w-[90%] flex-col gap-[40px]">
      <p className="w-[90%] text-black mt-6 leading-normal">
        Spreading Joy, One Bite at a Time. Welcome to the heart and soul of
        delicious dining in Naija style! Dive into a world where flavor dances,
        and grins are the main course.
      </p>
      <div className="flex items-center gap-4">
        <ArrowSvg />
        <GradientButton icon={<FrontIcon />}>Place Order</GradientButton>
      </div>
    </div>
  );
};

export default HeroTextAndCTA;
