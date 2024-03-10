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










export const LandingPage = () => {
  const [activeState, setActiveState] = useState<OverLayState | null>(null);

  const States: OverLayState[] = [
    {
      index: 1,
      name: "SIGN UP",
      component: <SignUpComponent setActiveState={setActiveState}/>,
    },
    {
      index: 2,
      name: "LOGIN",
      component: <LoginComponent setActiveState={setActiveState}/>,
    },
  ];
  


  const CloseModal = () => handleCloseModal(setActiveState);

  
  const Modal = ({
    activeState,
  }: {
    activeState: OverLayState | null;
    onClose: () => void;
  }) => {
    return (
      <OverLay>
        {activeState?.component}
      </OverLay>
    );
  };



  return (
    <AppSection>
      {activeState !== null && <Modal activeState={activeState} onClose={CloseModal} />}
      <NavigationBar />
      <HeroTextAndCTA>
        <HeroText />
        <HeroCTA />
      </HeroTextAndCTA>
      <LandingPageImage />
    </AppSection>
  );
};
