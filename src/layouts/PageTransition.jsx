import { motion } from "framer-motion";

import { useContext } from "react";
import { DefaultContext } from "@contexts/DefaultContextProvider.jsx";

const variants = {
  initial: (effect) => {
    switch (effect) {
      case "top":
        return { y: "-100%", opacity: 0 };
      case "bottom":
        return { y: "100%", opacity: 0 };
      case "left":
        return { x: "-100%", opacity: 0 };
      case "right":
        return { x: "100%", opacity: 0 };
      case "fade":
        return { opacity: 0 };
      case "scale":
        return { scale: 0.8, opacity: 0 };
      case "rotate":
        return { rotate: -180, opacity: 0 };
      case "slide-fade":
        return { x: "-100%", opacity: 0 };
      case "flip":
        return { rotateY: 90, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  },
  animate: (effect) => {
    switch (effect) {
      case "top":
      case "bottom":
      case "left":
      case "right":
      case "slide-fade":
        return { x: 0, y: 0, opacity: 1 };
      case "scale":
        return { scale: 1, opacity: 1 };
      case "rotate":
        return { rotate: 0, opacity: 1 };
      case "flip":
        return { rotateY: 0, opacity: 1 };
      case "fade":
      default:
        return { opacity: 1 };
    }
  },
  exit: (effect) => {
    switch (effect) {
      case "top":
        return { y: "-100%", opacity: 0 };
      case "bottom":
        return { y: "100%", opacity: 0 };
      case "left":
        return { x: "-100%", opacity: 0 };
      case "right":
        return { x: "100%", opacity: 0 };
      case "fade":
        return { opacity: 0 };
      case "scale":
        return { scale: 0.8, opacity: 0 };
      case "rotate":
        return { rotate: 180, opacity: 0 };
      case "slide-fade":
        return { x: "100%", opacity: 0 };
      case "flip":
        return { rotateY: -90, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  },
};

const PageTransition = ({ children, effect = "fade" }) => {
  const { transition_duration } = useContext(DefaultContext);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      custom={effect}
      transition={{ duration: transition_duration }}
      style={{ perspective: effect === "flip" ? 1000 : "none" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
