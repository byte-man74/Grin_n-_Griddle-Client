import React, { ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  width?: string;
  height?: string;
}

const GradientButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  width,
  height,
}) => {
  const gradient = {
    background: "linear-gradient(-45deg,  #FFD700, #DF6464)",
  };

  const buttonStyle: CSSProperties = {
    ...gradient,
    width: width,
    height: height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "none",
    borderRadius: "8px",
    color: "#ffffff", // Set text color to white or a contrasting color
  };

  return (
    <motion.button
    whileHover={{
      background: "black",
      scale: 0.9
    }}
    whileTap={{
      scale: 0.95
    }}
      className="px-8 py-[15px] font-bold"
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
      {icon && <span className="ml-6">{icon}</span>}
    </motion.button>
  );
};

export default GradientButton;
