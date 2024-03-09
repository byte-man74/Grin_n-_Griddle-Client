import React from 'react'
import AppSection from '../components/AppSection'
import { NavigationBar } from '../components/Navigate'
import { HeroTextAndCTA } from '../components/LandingPage/heroSection'

export const LandingPage = () => {
  return (
    <AppSection>
      <NavigationBar />
      <HeroTextAndCTA />
    </AppSection>

  )
}
