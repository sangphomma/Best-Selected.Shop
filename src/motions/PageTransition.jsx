import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const zoomAnimation = {
    initial: { scale: 0.7, opacity: 1 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1, opacity: 0 },
  };
  const rotateAnimation = {
    initial: { rotateY: 90 },
    animate: { rotateY: 0 },
    exit: { rotateY: -90 },
  };
  const opacityAnimation = {
    initial: { opacity: 0, scale: 1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  };
  const widthAnimation = {
    initial: { width: 0 },
    animate: { width: "100%" },
    exit: { width: "100%", x: window.innerWidth },
  };
  return (
    <motion.div
      initial="initial"
      exit="exit"
      animate="animate"
      transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
      variants={opacityAnimation}
    >
      <div>{children}</div>
    </motion.div>
  );
};

export default PageTransition;
