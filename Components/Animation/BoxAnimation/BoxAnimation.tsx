'use client'
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedComponentProps {
    children: ReactNode;
}

const fadeInVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
};

const BoxAnimation = ({ children }: AnimatedComponentProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

export default BoxAnimation;