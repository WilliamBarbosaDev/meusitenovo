import { cubicBezier } from "framer-motion";

// Smoother easing (Apple-style ease-out)
const smoothEase = [0.25, 0.1, 0.25, 1]; 

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: smoothEase }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleHover = {
  hover: { 
    scale: 1.02, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

export const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.0, 
      ease: [0.16, 1, 0.3, 1] as const // Custom smooth curve
    } 
  }
};
