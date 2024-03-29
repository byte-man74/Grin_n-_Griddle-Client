import React from "react";
import Logo from "../assets/images/dark.svg";
import { motion } from "framer-motion";
import {
  ContactSvg,
  GetStartedSvg,
  InstagramSvg,
  LeaderBoardSvg,
  MenuSvg,
  OrdersSvg,
  TwitterSvg,
} from "../assets/svg";

interface NavPayload {
  icon: React.ReactNode;
  title: string;
  action: Function;
}

const NavigationLink: React.FC<{ data: NavPayload }> = ({ data }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="flex items-center gap-1.5 text-backgroundPrimary text-[14px] cursor-pointer"
    onClick={() => data.action()}
  >
    {data.icon}
    {data.title}
  </motion.div>
);

const navItemsLeft: NavPayload[] = [
  {
    icon: <GetStartedSvg />,
    title: "Get Started",
    action: () => console.log("hello"),
  },
  {
    icon: <LeaderBoardSvg />,
    title: "Leader board",
    action: () => console.log("hello"),
  },
  {
    icon: <OrdersSvg />,
    title: "Orders",
    action: () => console.log("hello"),
  },
];

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
];

export const NavigationBar: React.FC = () => (
  <div className="max-w-[1530px] w-[90%] h-[5rem] bg-black rounded-lg md:w-[100%] md:rounded-none flex justify-center md:justify-between md:px-[20px] gap-[60px] items-center px-[100px] py-1">
    <div className="w-1/2 md:hidden max-w-[420px] h-1/2 md:w-1/2 flex items-center justify-start gap-8 py-2">
      {navItemsLeft.map((item, index) => (
        <NavigationLink key={index} data={item} />
      ))}
    </div>
    <div className="h-full w-[100px] bg-transparent flex items-center justify-center">
      <img src={Logo} alt="" />
    </div>
    <div className="hidden md:flex">
      <MenuSvg />
    </div>
    <div className="w-1/2 md:hidden max-w-[400px] h-1/2 md:w-1/2 flex justify-end items-center gap-10 py-3">
      {navItemsRight.map((item, index) => (
        <NavigationLink key={index} data={item} />
      ))}
    </div>
    {/* <div className="fixed left-0 top-0 z-10 w-full h-screen bg-red-500"></div> */}
  </div>
);
