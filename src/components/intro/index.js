import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {

    const background = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect(() => {

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        })

        timeline
        .from(background.current,{clipPath: `inset(5%)`})
        .to(introImage.current,{height: "60px"},0)
    }, [])

    return (
        <div className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={background}>
                <Image
                    src={'/images/pieces.jpg'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </div>
            <div className={styles.intro}>
                <div
                    ref={introImage}
                    data-scroll
                    data-scroll-speed="0.01"
                    className={styles.introImage}
                >
                    <Image
                        src={'/images/pieces.jpg'}
                        alt="intro image"
                        fill={true}
                        priority={true}
                    />
                </div>
                <h1 data-scroll data-scroll-speed="0.1">ICoN Lab</h1>
                <div>
                </div>
            </div>
        </div>
    )
}