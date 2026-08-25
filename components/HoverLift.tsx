"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type HoverLiftProps = {
  children: ReactNode;
  className?: string;
};

export default function HoverLift({ children, className = "" }: HoverLiftProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
