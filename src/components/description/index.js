import React, { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

const phrases = [
    "Connected Vehicle",
    "IoT (Internet of Things)",
    "Edge Computing",
    "Vehicular Named Data Networking (VNDN)",
    "Object Detection AI for Autonomous Vehicles"]

export default function Index() {

    return (
        <div className={styles.description} >
            {
                phrases.map((phrase, index) => {
                    return <AnimatedText key={index}>{phrase}</AnimatedText>
                })
            }
        </div>
    )
}

function AnimatedText({ children }) {
    const text = useRef(null);
    const background = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap
        .to(text.current, {
            scrollTrigger: {
                trigger: background.current,
                scrub: true,
                start: "0px top",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            left: "200px",
            ease: "power3.Out"
        })
    }, [])

    return <p ref={text}>{children}</p>
}