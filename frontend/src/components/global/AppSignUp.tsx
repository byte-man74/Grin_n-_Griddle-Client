import React from "react";
interface SignUpProps {
  setActiveState: Function;
}

const SignUpComponent: React.FC<SignUpProps> = () => {
  return (
    <div className="w-[300px] h-[200px] bg-white text-black">
      Sign Up Content
    </div>
  );
};

export default SignUpComponent;
