import React from 'react'
import { motion } from 'framer-motion'
import Image from '../../assets/images/resturant.svg'

const animationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hover: { scale: 1.02, transition: { duration: 0.6 } }, // Hover animation
}

export const LandingPageImage = () => {
  return (
    <motion.img
      src={Image}
      className="object-cover w-[100%] h-[450px] md:h-[300px] md:my-2 md:rounded-none md:mt-12 max-w-[1530px] bg-black my-14 rounded-lg"
      alt=""
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover" // Define hover animation state
    />
  )
}
