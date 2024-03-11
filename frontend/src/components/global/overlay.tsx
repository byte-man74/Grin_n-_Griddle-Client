import React, { ReactNode }  from 'react'


interface OverlayProps {
    children: ReactNode;
  }



export const OverLay: React.FC<OverlayProps> = ({children}) => {
    return (
        <div className="fixed top-0 z-10 flex justify-center items-start w-full h-screen py-24  bg-[#00000059]">
            {children}
        </div>
      )
}
