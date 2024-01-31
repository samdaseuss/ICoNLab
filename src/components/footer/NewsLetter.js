import Link from "next/link";
import styles from "./styles.module.scss";

export default function NewsLetter() {
    return (
        <div className={styles.footer__newsletter}>
            <h3>메일로 소식받기</h3>
            <div className={styles.footer__flex}>
                <input type="text" placeholder="이메일 주소를 입력하세요"></input>
                <button className={styles.btn_primary}>소식받기</button>
            </div>
            <p>
                구독 버튼을 누르면 {" "}
                <Link href="">개인정보 및 쿠키정책</Link>
                에 동의하는 것으로 간주됩니다.
            </p>
        </div>
    );
}