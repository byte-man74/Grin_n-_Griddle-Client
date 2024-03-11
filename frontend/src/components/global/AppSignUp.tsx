import React from "react";
interface SignUpProps {
  setActiveState: Function;
}

const SignUpComponent: React.FC<SignUpProps> = () => {
  return (
    <div className="w-[550px] min-h-[200px] rounded-md p-4 bg-white text-primaryDark">
      <div className="flex flex-col gap-[4px]">
        <h4 className="font-bold text-[25px]">Get started</h4>
        <p className="text-[14px] text-primaryDark">It won’t take a minute!</p>
      </div>


    </div>
  );
};



const Cancel: React.FC <Function> = (cancel) => {
  <div onClick={() => cancel(false)}>
    <CancelSvg />
  </div>
}

export default SignUpComponent;
