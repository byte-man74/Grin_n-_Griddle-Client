import React, { ReactNode }  from 'react'


interface OverlayProps {
    children: ReactNode;
  }



export const OverLay: React.FC<OverlayProps> = ({children}) => {
    return (
        <div className="fixed top-0 z-10 flex justify-center w-full h-screen py-10 bg-[#00000080]">
            {children}
        </div>
      )
}
