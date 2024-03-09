import React from "react";
import AppSection from "../components/AppSection";
import { NavigationBar } from "../components/Navigate";
import HeroTextAndCTA, {
  HeroText,
} from "../components/LandingPage/heroSection";

export const LandingPage = () => {
  return (
    <AppSection>
      <NavigationBar />
      <HeroTextAndCTA>
        <HeroText />
      </HeroTextAndCTA>
    </AppSection>
  );
};
