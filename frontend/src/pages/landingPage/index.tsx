import React, { useState } from "react";
import AppSection from "../../components/AppSection";
import { NavigationBar } from "../../components/Navigate";
import HeroTextAndCTA, {
  HeroCTA,
  HeroText,
} from "../../components/LandingPage/heroSection";
import { LandingPageImage } from "../../components/LandingPage/landingPageImage";
import { OverLay } from "../../components/global/overlay";
import { OverLayState } from "../../components/global/types";
import SignUpComponent from "../../components/global/AppSignUp";
import LoginComponent from "../../components/global/AppLogin";
import { handleCloseModal } from "./utils/buttonAction";







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
  const [activeState, setActiveState] = useState<OverLayState | null>(States[1]);


  const CloseModal = () => handleCloseModal(setModal, setActiveState);



  
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
      {modal && <Modal activeState={activeState} onClose={CloseModal} />}
      <NavigationBar />
      <HeroTextAndCTA>
        <HeroText />
        <HeroCTA />
      </HeroTextAndCTA>
      <LandingPageImage />
    </AppSection>
  );
};
