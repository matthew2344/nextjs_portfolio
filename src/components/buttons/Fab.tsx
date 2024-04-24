import React from 'react'
import { motion } from 'framer-motion';

interface FabProps {
  icon: React.ReactNode;
  whileHover?: { scale: number };
  whileTap?: { scale: number };
  title: string;
  customClassName: string;
  onClick: () => void;
}

const Fab: React.FC<FabProps> = ({
  icon,
  whileHover,
  whileTap,
  title,
  customClassName,
  onClick,
}) => {
  const fabClassName = `hidden md:flex fixed z-40 rounded-full drop-shadow-lg flex justify-center items-center text-4xl ${customClassName}`

  return (
    <motion.button
      whileHover={whileHover}
      whileTap={whileTap}
      title={title}
      className={fabClassName}
      onClick={onClick}
    >
      {icon}
    </motion.button>
  )
}

export default Fab;