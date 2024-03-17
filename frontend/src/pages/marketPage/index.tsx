import React from "react";
import AppSection from "../../components/global/AppSection";
import { NavigationBar } from "../../components/Navigate";

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
    <div className="min-w-[40px] mr-auto ml-[5%] relative min-h-[20px] mt-[70px]">
      <input
        type="text"
        placeholder="Search drinks and food"
        className="rounded-md border-gray-400 border-[1px] border-solid pl-4 outline-none  h-[50px] w-[500px]"
      />
    </div>
  );
};

const FoodContainer: React.FC = () => {
  return (
    <div className="w-[90%] flex-wrap justify-between min-h-10 bg-black mt-10 flex gap-y-10">
      <FoodItemBox />
      <FoodItemBox />
      <FoodItemBox />
      <FoodItemBox />
      <FoodItemBox />
    </div>
  );
};

const FoodItemBox: React.FC = () => {
  return <div className="w-[305px] h-[280px] bg-white "></div>;
};
