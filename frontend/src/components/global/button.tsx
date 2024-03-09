import React, { ReactNode, CSSProperties } from 'react';

interface ButtonProps {
  background?: string;
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  width?: string;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({ background, children, onClick, icon, width, height }) => {
  const buttonStyle: CSSProperties = {
    backgroundColor: background,
    width: width,
    height: height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
  };

  return (
    <button className="px-8 py-[10px] text-white bg-blue-500 font-bold" style={buttonStyle} onClick={onClick}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
