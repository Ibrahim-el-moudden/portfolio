"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setWidth(latest * 100);
        });
    }, [scrollYProgress]);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#e11d48] z-50"
            style={{ width: `${width}%` }}
        />
    );
};