// src/components/animated-section.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const AnimatedSection = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
