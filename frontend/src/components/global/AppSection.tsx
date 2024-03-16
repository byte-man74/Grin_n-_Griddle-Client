import React, { ReactNode, useEffect, useState } from "react";
import { OverLayState } from "./types";
import SignUpComponent from "./AppSignUp";
import { OverLay } from "./overlay";
import LoginComponent from "./AppLogin";
import { handleCloseModal } from "./utils/buttonAction";

interface AppSectionProps {
  children: ReactNode;
}

const AppSection: React.FC<AppSectionProps> = ({ children }) => {
  const [activeState, setActiveState] = useState<OverLayState | null>(null);

  const States: OverLayState[] = [
    {
      index: 1,
      name: "SIGN UP",
      component: <SignUpComponent setActiveState={setActiveState} />,
    },
    {
      index: 2,
      name: "LOGIN",
      component: <LoginComponent setActiveState={setActiveState} />,
    },
  ];






  const CloseModal = () => handleCloseModal(setActiveState);

  const Modal = ({
    activeState,
  }: {
    activeState: OverLayState | null;
    onClose: () => void;
  }) => {
    return <OverLay>{activeState?.component}</OverLay>;
  };

  return (
    <div className="relative flex max-w-[3000px] mx-auto flex-col items-center w-full min-h-screen pt-4 md:pt-0 bg-backgroundPrimary">
      {activeState !== null && (
        <Modal activeState={activeState} onClose={CloseModal} />
      )}
      {children}
    </div>
  );
};

export default AppSection;
