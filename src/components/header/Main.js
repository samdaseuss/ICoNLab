import Link from "next/link";
import styles from "./styles.module.scss";

export default function Main() {
    return <div className={styles.main}>
        <div className={styles.main__container}>
            <Link href="/">
                <div className={styles.logo}>
                    <span className={styles.main__list}>
                    <h1>ICoN</h1>
                    <span>
                        <h6>&nbsp;</h6>
                        <h6>Intelligent</h6>
                        <h6>Computing &amp;</h6>
                        <h6>Networking Lab</h6>
                    </span>
                    </span>
                </div>
            </Link>
            <ul className={styles.main__list}>
                <li className={styles.li}>
                    <span>교수님</span>
                </li>
                <li className={styles.li}>
                    <span>연구실 멤버</span>
                </li>
                <li className={styles.li}>
                    <span>프로젝트</span>
                </li>
                <li className={styles.li}>
                    <span>연구환경</span>
                </li>
                <li className={styles.li}>
                    <Link href="/contact">
                        <span>연구원 신청</span>
                    </Link>
                </li>
                <li className={styles.li}
                    onMouseOver={() => setVisible(true)}
                    onMouseLeave={() => setVisible(false)}
                ></li>
            </ul>
        </div>
    </div>
}