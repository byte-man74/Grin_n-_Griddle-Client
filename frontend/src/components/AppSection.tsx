import React, { ReactNode } from 'react';

interface AppSectionProps {
  children: ReactNode;
}

const AppSection: React.FC<AppSectionProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen pt-4 bg-backgroundPrimary">
      {children}
    </div>
  );
};

export default AppSection;
