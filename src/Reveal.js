import React from "react";
import { useRef, useEffect } from "react";
import { useInView, motion, useAnimation } from "framer-motion";

export const Reveal = ({ children, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};
