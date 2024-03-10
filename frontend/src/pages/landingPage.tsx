import React, { ReactNode, useState } from "react";
import AppSection from "../components/AppSection";
import { NavigationBar } from "../components/Navigate";
import HeroTextAndCTA, {
  HeroCTA,
  HeroText,
} from "../components/LandingPage/heroSection";
import { LandingPageImage } from "../components/LandingPage/landingPageImage";
import { OverLay } from "../components/global/overlay";






const SignUpComponent = () => {
  return <div className="w-[300px] h-[200px] bg-white text-black">Sign Up Content</div>;
};

const LoginComponent = () => {
  return <div>Login Content</div>;
};


interface OverLayState {
  index: number;
  name: string;
  component: ReactNode;
}

const States: OverLayState[] = [
  {
    index: 1,
    name: "SIGN UP",
    component: <SignUpComponent />,
  },
  {
    index: 2,
    name: "LOGIN",
    component: <LoginComponent />,
  },
];

export const LandingPage = () => {
  const [modal, setModal] = useState(true);
  const [activeState, setActiveState] = useState<OverLayState | null>(States[0]);



  const handleCloseModal = () => {
    setModal(false);
    setActiveState(null);
  };
  const Modal = ({
    activeState,
    onClose,
  }: {
    activeState: OverLayState | null;
    onClose: () => void;
  }) => {
    return (
      <OverLay>
        {activeState?.component}
        <button onClick={onClose}>Close Modal</button>
      </OverLay>
    );
  };

  return (
    <AppSection>
      {modal && <Modal activeState={activeState} onClose={handleCloseModal} />}
      <NavigationBar />
      <HeroTextAndCTA>
        <HeroText />
        <HeroCTA />
      </HeroTextAndCTA>
      <LandingPageImage />
    </AppSection>
  );
};
