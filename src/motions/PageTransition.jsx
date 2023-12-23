import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const variants = {
    initial: { width: 0 },
    animate: { width: "100%" },
    exit: { width: "100%", x: window.innerWidth },
  };
  return (
    <motion.div
      initial="initial"
      exit="exit"
      animate="animate"
      transition={{ ease: "easeInOut", duration: 0.7 }}
      variants={variants}
    >
      {" "}
      <div>{children}</div>
    </motion.div>
  );
};

export default PageTransition;
