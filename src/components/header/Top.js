import styles from "./styles.module.scss";
import Link from "next/link";
import { FcCheckmark } from "react-icons/fc";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import { useState } from "react";
import { useSession } from "next-auth/react"
import UserMenu from "./UserMenu";

export default function Top({country}) {
    const { data: session } = useSession();
    const [visible, setVisible] = useState(false);
    return <div className={styles.top}>
        <div className={styles.top__container}>
            <div></div>
            <ul className={styles.top__list}>
                <li className={styles.li}>
                    <Link href="http://www.hoseo.ac.kr/Home/Main.mbz">
                        <span>호서대학교</span>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="https://computer.hoseo.ac.kr/Home/Main.mbz">
                        <span>호서대학교 컴퓨터공학부</span>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="https://aisw.hoseo.ac.kr/">
                        <span>AISW중심대학사업단</span>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="https://aix.hoseo.ac.kr/">
                        <span>AI+X연구센터</span>
                    </Link>
                </li>
                <li className={styles.li}>
                    <span>정보 수정 요청</span>
                    <FcCheckmark />
                </li>
                <li className={styles.li}>
                    <span>도움</span>
                </li>
                <li className={styles.li}
                    onMouseOver={() => setVisible(true)}
                    onMouseLeave={() => setVisible(false)}
                >
                { session ? (
                    <li className={styles.li}>
                        <div className={styles.flex}>
                            <img src={session.user.image} alt=""></img>
                            <span>{session.user.name}</span>
                            <RiArrowDropDownFill />
                        </div>
                    </li>
                ) : (
                    <li className={styles.li}>
                        <div className={styles.flex}>
                            <RiAccountPinCircleLine />
                            <span>계정</span>
                            <RiArrowDropDownFill />
                        </div>
                    </li>
                )}
                { visible && <UserMenu session={session} /> }
                </li>
            </ul>
        </div>
    </div>
}