import React, {ReactNode} from 'react'

interface HeroTextAndCTAProps {
    children: ReactNode;
  }


 const HeroTextAndCTA: React.FC<HeroTextAndCTAProps> = ({children}) => {
  return (
    <div className="w-[90%] min-h-10 mt-[60px]">
        {children}
    </div>
  )
}

export const HeroText = () => {
    return (
        <h1 className="text-black w-[49%] text-[65px] font-bold leading-normal">
            🌶️ Savor the Spice, Share the Smile! 😁
        </h1>
    )
}


export default HeroTextAndCTA