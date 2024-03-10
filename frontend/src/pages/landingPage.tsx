import React, {useState} from "react";
import AppSection from "../components/AppSection";
import { NavigationBar } from "../components/Navigate";
import HeroTextAndCTA, {
  HeroCTA,
  HeroText,
} from "../components/LandingPage/heroSection";
import { LandingPageImage } from "../components/LandingPage/landingPageImage";
import { OverLay } from "../components/global/overlay";

export const LandingPage = () => {
//  const [modal, setModal] = useState(false)
  return (
    <AppSection>
      <OverLay/>
      <NavigationBar />
      <HeroTextAndCTA>
        <HeroText />
        <HeroCTA />
      </HeroTextAndCTA>
      <LandingPageImage />
    </AppSection>
  );
};
