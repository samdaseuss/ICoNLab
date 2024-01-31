import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const projects = [
    {
        kor_title: "",
        title: "임헌국(Researcher), Next-generation Display Expert Training Project for Innovation Process and Equipment, Materials Engineers, the Competency Development Program for Industry Specialists of the Korean Ministry of Trade, Industry and Energy (MOTIE), operated by KIAT (Project Number: P0012453), 2020.03.01 ~ 2025.02.28",
        duration: "2020.03.01 - 2025.02.28",
        src: "salar_de_atacama.jpg"
    },
    {
        title: "임헌국(PI), 차량 엔디엔 환경하에서 인포테인먼트 서비스 실현을 위한 패킷 제어 및 포워딩 기법 연구 (Research on Interest/Data Packet Control and Forwarding Scheme for Connected Car Infotainment Application Service in Vehicular NDN), 한국연구재단 중견연구자 지원사업 (NRF), 2023.03.01 ~ 2024.2.28",
        duration: "2023.03.01 - 2023.02.28",
        src: "valle_de_la_muerte.jpeg"
    },
    {
        title: "임헌국(PI), 자율주행 차량용 이미지 기반 객체인식 AI 기술 개발, 대전.세종.충남 지역혁신플랫폼 모빌리티 ICT사업본부 글로벌선도기술지원사업 ",
        duration: "2022.09.15 - 2023.02.28",
        src: "miscani_lake.jpeg"
    },
    {
        en_title: "Research on Interest/Data Packet Control and Forwarding Scheme for Connected Car Infotainment Application Service in Vehicular NDN",
        title: "임헌국(PI), 차량 엔디엔 환경하에서 인포테인먼트 서비스 실현을 위한 패킷 제어 및 포워딩 기법 연구   (Research on Interest/Data Packet Control and Forwarding Scheme for Connected Car Infotainment  Application Service in Vehicular NDN), 한국연구재단 중견연구자 지원사업 (NRF), 2022.03.01~2023.2.28",
        src: "miniques_lagoon.jpg"
    },
    {
        title: "임헌국(PI), ndnSIM을 이용한 NDN 네트워크 구현 및 성능 평가, 호서대 학술연구비 프로젝트, 2021.3.01 ~ 2022.02 28",
        src: "miniques_lagoon.jpg"
    },
    {
        title: "임헌국(PI), 차량 엔디엔 환경하에서 인포테인먼트 서비스 실현을 위한 패킷 제어 및 포워딩 기법 연구 (Research on Interest/Data Packet Control and Forwarding Scheme for Connected Car Infotainment Application Service in Vehicular NDN), 한국연구재단 중견연구자 지원사업 (NRF), 2021.03.01~2022.2.28",
        src: "miniques_lagoon.jpg"
    },
    {
        title: "임헌국(PI), 네임드 데이터 네트워킹 기반의 차량 정보/컨텐트 서비스를 위한 현존 전달 기법 분석, 호서대 학술연구비 프로젝트, 2020.3.01 ~ 2021.02 28 ",
        src: "miniques_lagoon.jpg"
    },
    {
        title: "임헌국(PI), EdgeCloudSim SW 시뮬레이터를 이용한 엣지 컴퓨팅 가상 환경 개발, SW 중심 대학 산학공동 프로젝트, 2020.3.01 ~ 2021.02 28",
        src: "miniques_lagoon.jpg"
    },
]


export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top+=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            {/* <h1> 우리의 연구 목표 </h1>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>임헌국(Researcher), Next-generation Display Expert Training Project for Innovation Process and Equipment, Materials Engineers, the Competency Development Program for Industry Specialists of the Korean Ministry of Trade, Industry and Energy (MOTIE), operated by KIAT (Project Number: P0012453), 2020.03.01 ~ 2025.02.28</p>
                </div>
                <div className={styles.column}>
                    <p>임헌국(Researcher), Next-generation Display Expert Training Project for Innovation Process and Equipment, Materials Engineers, the Competency Development Program for Industry Specialists of the Korean Ministry of Trade, Industry and Energy (MOTIE), operated by KIAT (Project Number: P0012453), 2020.03.01 ~ 2025.02.28</p>
                </div>
            </div> */}

            <h1>우리의 프로젝트</h1>
            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
