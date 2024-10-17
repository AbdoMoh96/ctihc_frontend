'use client'
import React, { ReactNode, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface propTypes {
    children: ReactNode;
    className? :string;
    id? : string;
}

const fadeInVariants = {
    hidden: { opacity: 0, y: -75 },
    visible: { opacity: 1, y: 0 },
};

const AnimatedSection = ({ children, className, id }: propTypes) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once:true });
    const animationState = useAnimation();

    useEffect(() => {
        if(isInView){
          animationState.start('visible').catch();
        }
    }, [isInView, animationState]);

    return (
        <section ref={ref} className={`${className} relative overflow-hidden `} id={id}>
        <motion.div
            initial="hidden"
            className='w-full h-full'
            variants={fadeInVariants}
            animate={animationState}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
        </section>
    );
};

export default AnimatedSection;