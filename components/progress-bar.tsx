import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-[0.1rem] bg-purple z-50"
            style={{ scaleX: scrollYProgress }}
        />
    );
};

export default ProgressBar;
