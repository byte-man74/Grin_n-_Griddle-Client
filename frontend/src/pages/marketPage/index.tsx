import React from "react";
import AppSection from "../../components/global/AppSection";
import { NavigationBar } from "../../components/Navigate";
import { AddCTASvg, SearchSvg } from "../../assets/svg";

export const MarketPage: React.FC = () => {
  return (
    <AppSection>
      <NavigationBar />
      <SearchContainer />
      <FoodContainer />
    </AppSection>
  );
};

const SearchContainer: React.FC = () => {
  return (
    <div className="min-w-[40px] mr-auto ml-[5%] relative min-h-[20px] mt-[70px] md:w-[90%] md:ml-auto">
      <input
        type="text"
        placeholder="Search drinks and food"
        className="rounded-md text-md border-gray-400 border-[1px] md:w-[100%] border-solid pl-4 outline-none  h-[50px] w-[500px]"
      />
      <div className="flex justify-center items-center absolute top-[13px] right-4">
        <SearchSvg />
      </div>
    </div>
  );
};

const FoodContainer: React.FC = () => {
  return (
    <div className="w-[90%] flex-wrap justify-between min-h-10 mt-10 flex gap-y-10 pb-14 gap-x-4 md:justify-center">
      <FoodItemBox />
      <FoodItemBox />
      <FoodItemBox />
      <FoodItemBox />
      <FoodItemBox />
    </div>
  );
};

const FoodItemBox: React.FC = () => {
  return (
    <div className="w-[305px] h-[280px] bg-white relative rounded-md overflow-hidden">
      <div className="w-full h-[80%] z-10 absolute top-0 left-0 bg-black bg-opacity-35"></div>
      <img
        src="https://i.pinimg.com/564x/06/33/1a/06331aa2e07ca09d0ced090c22f51f64.jpg"
        className=" object-cover w-full h-[80%] bg-yellow-500"
        alt=""
      />
      <div className="w-full h-[20%] px-3 flex items-center justify-between gap-4 bg-white">
        <p className="font-bold text-[14px]">Fish and Onions Salad</p>
        <AddCTA />
      </div>
    </div>
  );
};

const AddCTA: React.FC = () => {
  return (
    <div className="flex gap-2 items-center text-sm text-[#DF6464]">
      Add
      <AddCTASvg />
    </div>
  );
};
