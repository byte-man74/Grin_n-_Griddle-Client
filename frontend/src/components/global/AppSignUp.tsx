import React from "react";
import { CancelSvg, FrontIcon } from "../../assets/svg";
import { motion } from "framer-motion";
import GradientButton from "./button";
interface SignUpProps {
  setActiveState: Function;
}

const SignUpComponent: React.FC<SignUpProps> = ({ setActiveState }) => {
  return (
    <div className="w-[550px] min-h-[200px] md:w-full md:h-screen md:rounded-none rounded-md p-4 bg-white text-primaryDark">
      {/* modal header */}
      <div className="flex items-center justify-between ">
        <div className="flex flex-col gap-[4px]">
          <h4 className="font-bold text-[25px]">Get started</h4>
          <p className="text-[14px] text-primaryDark">
            It won’t take a minute!
          </p>
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
          className="w-full mb-8 h-[55px] px-2 bg-white border-b border-[rgba(40, 40, 40, 0.26)] border-solid outline-none"
          placeholder="Enter password"
        />
        <input
          type="password"
          className="w-full h-[55px] mb-2 px-2 bg-white border-b border-[rgba(40, 40, 40, 0.26)] border-solid outline-none"
          placeholder="Confirm password"
        />
        <p className="text-[14px] text-primaryDark mb-14">
          Already have an account?{" "}
          <motion.span
            whileHover={{ scale: 0.9 }}
            className="font-bold text-[#FF6F61] cursor-pointer"
          >
            Login
          </motion.span>
        </p>

        <GradientButton icon={<FrontIcon />} width="100%" height="55px">
          Continue
        </GradientButton>
      </div>
    </div>
  );
};

export const Cancel: React.FC<SignUpProps> = ({ setActiveState }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.75, backgroundColor: "#FF6F61" }}
      whileTap={{ scale: 0.94 }}
      className="cursor-pointer p-[2px] rounded-full"
      onClick={() => setActiveState(null)}
    >
      <CancelSvg />
    </motion.div>
  );
};

export default SignUpComponent;
