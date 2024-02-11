import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Paragraph({value}) {

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: [
            "start 0.7",
            "start start"
        ]
    });

    const words = value.split(" ");

    return (
        <>
            <div style={{height: "8vh"}}></div>
            <p 
                className={styles.paragraph}
                ref={element}
            >
                {
                    words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + ( 1 / words.length );
                        return <Word 
                                    key={i} 
                                    range={[start, end]} 
                                    progress={scrollYProgress}
                                >
                                    {word}
                                </Word>
                    })
                }
            </p>
        </>
    )
}

const Word = ({children, range, progress}) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <motion.span
            style={{opacity: opacity}}
            className={styles.word}
        >
            {children}
        </motion.span>
    );
}