import React from "react";
import AppSection from "../../components/global/AppSection";
import { NavigationBar } from "../../components/Navigate";
import HeroTextAndCTA, {
  HeroCTA,
  HeroText,
} from "../../components/LandingPage/heroSection";
import { LandingPageImage } from "../../components/LandingPage/landingPageImage";

export const LandingPage = () => {
  return (
    <AppSection>
      <NavigationBar />
      <HeroTextAndCTA>
        <HeroText />
        <HeroCTA />
      </HeroTextAndCTA>
      <LandingPageImage />
    </AppSection>
  );
};
