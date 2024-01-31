import Link from "next/link";
import styles from "./styles.module.scss";
import { signOut, signIn } from "next-auth/react";

export default function UserMenu({session}) {
    return <div className={styles.menu}>
        <h4>혁신을 연구하는 ICoN 랩 입니다!</h4>
        {
            session ? (
                <div className={styles.flex}>
                    <img
                        src={session.user.image}
                        alt=""
                        className={styles.menu__img}
                    />
                    <div className={styles.col}>
                        <span>반가워요, </span>
                        <h3>{session.user.name}</h3>
                        <span onClick={() => signOut()}>로그아웃</span>
                    </div>
                </div>
            ) : (
                <div className={styles.flex}>
                    <button className={styles.btn_primary}>회원가입</button>
                    <button 
                        className={styles.btn_outlined}
                        onClick={() => signIn()}>로그인</button>
                </div>
            )
        }
        <ul>
            <li>
                <Link href="/profile">계정 정보</Link>
            </li>
            <li>
                <Link href="/question">문의하기</Link>
            </li>
        </ul>
    </div>;
}