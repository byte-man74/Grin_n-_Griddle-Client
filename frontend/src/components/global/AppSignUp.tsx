import React from "react";
interface SignUpProps {
  setActiveState: Function;
}

const SignUpComponent: React.FC<SignUpProps> = () => {
  return (
    <div className="w-[550px] min-h-[200px] rounded-md py-3 px-2 bg-white text-black">
      <div className="flex flex-col gap-3">
        <h4 className="font-bold text-[25px]">Get started</h4>
      </div>
    </div>
  );
};

export default SignUpComponent;
