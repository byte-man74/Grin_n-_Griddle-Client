import React from "react";
import { Cancel } from "./AppSignUp";
import { motion } from "framer-motion";
import GradientButton from "./button";
import { FrontIcon } from "../../assets/svg";

interface LoginProps {
  setActiveState: Function;
}

const LoginComponent: React.FC<LoginProps> = ({ setActiveState }) => {
  return (
    <div className="w-[550px] min-h-[200px] rounded-md p-4 bg-white text-primaryDark">
      {/* modal header */}
      <div className="flex items-center justify-between ">
        <div className="flex flex-col gap-[4px]">
          <h4 className="font-bold text-[25px]">Login</h4>
        </div>
        <Cancel setActiveState={setActiveState} />
      </div>


            {/* modal form content */}
            <div className="w-full mt-10 min-h-5">
        <input
          type="text"
          className="w-full h-[55px] px-2 mb-8 bg-white border-b border-[rgba(40, 40, 40, 0.26)] border-solid outline-none"
          placeholder="Enter phone number"
        />
        <input
          type="password"
          className="w-full mb-2 h-[55px] px-2 bg-white border-b border-[rgba(40, 40, 40, 0.26)] border-solid outline-none"
          placeholder="Enter password"
        />
        <p className="text-[14px] text-primaryDark mb-14">
          Don't have an account?{" "}
          <motion.span
            whileHover={{ scale: 0.9 }}
            className="font-bold text-[#FF6F61] cursor-pointer"
          >
            Create account
          </motion.span>
        </p>

        <GradientButton icon={<FrontIcon />} width="100%" height="55px">
          Continue
        </GradientButton>
      </div>
    </div>
  );
};

export default LoginComponent;
