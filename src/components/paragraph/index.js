import React, {useEffect, useRef} from 'react';
import styles from './styles.module.scss';
import { useScroll, motion } from 'framer-motion';

export default function Word({value}) {

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: [
            'start 0.9', 
            'start 0.4'
        ]
    });

    useEffect(() => {
        scrollYProgress.on(
            "change", e => console.log(e)
        );
    }, [])

    return (
        <>
            <div style={{height: "10vh"}}></div>
            <motion.p 
                className={styles.paragraph}
                ref={element}
                style={{opacity: scrollYProgress}}
            >
                {value[0]}
            </motion.p>
            <motion.p 
                className={styles.subparagraph}
                ref={element}
                style={{opacity: scrollYProgress}}
            >
                {value[1]}
            </motion.p>
        </>
    )
}