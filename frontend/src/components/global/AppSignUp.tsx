import React from "react";
import { CancelSvg } from "../../assets/svg";
import { motion } from "framer-motion";
interface SignUpProps {
  setActiveState: Function;
}

const SignUpComponent: React.FC<SignUpProps> = ({ setActiveState }) => {
  return (
    <div className="w-[550px] min-h-[200px] rounded-md p-4 bg-white text-primaryDark">
      <div className="flex items-center justify-between ">
        <div className="flex flex-col gap-[4px]">
          <h4 className="font-bold text-[25px]">Get started</h4>
          <p className="text-[14px] text-primaryDark">
            It won’t take a minute!
          </p>
        </div>
        <Cancel setActiveState={setActiveState} />
      </div>
    </div>
  );
};

const Cancel: React.FC<SignUpProps> = ({ setActiveState }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.94 }} className="cursor-pointer" onClick={() => setActiveState(null)}>
      <CancelSvg />
    </motion.div>
  );
};

export default SignUpComponent;
