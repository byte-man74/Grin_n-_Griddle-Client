import React from "react";
import Logo from "../assets/images/dark.svg";
import { ContactSvg, GetStartedSvg, InstagramSvg, LeaderBoardSvg, OrdersSvg, TwitterSvg } from "../assets/svg";

interface NavPayload {
  icon: React.ReactNode;
  title: string;
  action: Function;
}

const NavigationLink: React.FC<{ data: NavPayload }> = ({ data }) => (
  <div
    className="flex items-center gap-1.5 text-backgroundPrimary text-md cursor-pointer"
    onClick={() => data.action()}
  >
    {data.icon}
    {data.title}
  </div>
);


const navItemsLeft: NavPayload[] = [
  {
    icon: <GetStartedSvg />,
    title: "Get Started",
    action: () => console.log("hello"),
  },
  {
    icon: <LeaderBoardSvg />,
    title: "Leaderboard",
    action: () => console.log("hello"),
  },
  {
    icon: <OrdersSvg />,
    title: "Orders",
    action: () => console.log("hello"),
  },
]

const navItemsRight: NavPayload[] = [
  {
    icon: <InstagramSvg />,
    title: "Instagram",
    action: () => console.log("hello"),
  },
  {
    icon: <TwitterSvg />,
    title: "Twitter",
    action: () => console.log("hello"),
  },
  {
    icon: <ContactSvg />,
    title: "Contact",
    action: () => console.log("hello"),
  },
]

export const NavigationBar: React.FC = () => (
  <div className="max-w-[3000px] w-[90%] h-[5rem] bg-black rounded-lg flex justify-between items-center px-[100px] md:px-[90px] py-1">
    <div className="w-1/3 max-w-[400px] h-1/2 md:w-1/2 flex items-center justify-start gap-10 py-3">
    {navItemsLeft.map((item, index) => (
        <NavigationLink key={index} data={item} />
      ))}
    </div>
    <div className="h-full w-[100px] bg-transparent flex items-center justify-center">
      <img src={Logo} alt="" />
    </div>
    <div className="w-1/3 max-w-[400px] h-1/2 md:w-1/2 flex justify-end items-center gap-10 py-3">
    {navItemsRight.map((item, index) => (
        <NavigationLink key={index} data={item} />
      ))}
    </div>
  </div>
);
