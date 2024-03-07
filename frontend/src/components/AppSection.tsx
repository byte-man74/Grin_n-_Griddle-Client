import React, { ReactNode } from 'react';

interface AppSectionProps {
  children: ReactNode;
}

const AppSection: React.FC<AppSectionProps> = ({ children }) => {
  return (
    <div className="relative flex justify-center w-full min-h-screen pt-4 bg-backgroundPrimary flex-column">
      {children}
    </div>
  );
};

export default AppSection;
