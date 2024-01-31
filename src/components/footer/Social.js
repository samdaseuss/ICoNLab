import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import styles from "./styles.module.scss";

export default function Socials() {
    return <div className={styles.footer__socials}>
        <section>
            <h3>소셜에서 소식받기</h3>
            <ul>
                <li>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram />
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <BsTwitter />
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <FaTiktok />
                    </a>
                </li>
            </ul>
        </section>
    </div>;
}