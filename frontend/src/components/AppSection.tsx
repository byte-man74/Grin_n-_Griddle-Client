import React, { ReactNode } from 'react';

interface AppSectionProps {
  children: ReactNode;
}

const AppSection: React.FC<AppSectionProps> = ({ children }) => {
  return (
    <div className="relative flex justify-center w-full pt-4 bg-black min-h-40 flex-column">
      {children}
    </div>
  );
};

export default AppSection;
