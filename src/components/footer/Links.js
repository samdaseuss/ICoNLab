import Link from "next/link";
import styles from "./styles.module.scss";

export default function Links() {
    return (
        <div className={styles.footer__links}>
        { links.map((link, i) => (
            <ul>
                {i === 0 ? (
                    <div>
                        <h2>We're the</h2>
                        <h1>ICoN.</h1>
                    </div>
                ) : (<b>{link.heading}</b>
                )}
                {link.links.map((link) => (
                    <li>
                        <Link href={link.link}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        ))}
        </div>
    );
}

const links = [
    {
        heading: "ICoN LAB",
        links: [
            {
                name: "연구실 위치",
                link: ""
            },
            {
                name: "우리의 비전과 가치",
                link: "",
            },
            {
                name: "협업 문의",
                link: ""
            },
        ]
    },
    {
        heading: "교수님",
        links: [
            {
                name: "교수님 소개",
                link: "https://sites.google.com/view/hklim/professor"
            },
            {
                name: "연구 분야",
                link: "https://sites.google.com/view/hklim/research"
            },
            {
                name: "논문",
                link: "https://sites.google.com/view/hklim/publications",
            },
            {
                name: "개설 강좌",
                link: ""
            },
            {
                name: "",
                link: ""
            },
        ]
    },
    {
        heading: "연구원",
        links: [
            {
                name: "참여 연구원",
                link: ""
            },
            {
                name: "연구원 지원하기",
                link: ""
            },
            {
                name: "연구원 핵심 가치",
                link: "",
            },
            {
                name: "연구원 업무 가이드",
                link: ""
            },
        ]
    },
    {
        heading: "프로젝트",
        links: [
            {
                name: "주요 프로젝트",
                link: ""
            },
            {
                name: "진행중인 프로젝트",
                link: ""
            },
            {
                name: "완료된 프로젝트",
                link: ""
            },
        ]
    },
    {
        heading: "서비스 운영",
        links: [
            {
                name: "개발 문의 opendata.yunjioh@gmail.com",
                link: ""
            },
            {
                name: "유지 보수 문의 041-540-5942",
                link: ""
            },
        ]
    },
]