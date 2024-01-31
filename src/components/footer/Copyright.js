import Link from "next/link";
import styles from "./styles.module.scss";
import { IoLocationSharp } from "react-icons/io5";

export default function Copyright({ country }) {
    return (
        <div className={styles.footer__copyright}>
        <section>©2024 ICoN LAB All Rights Resereved.</section>
        <section>
          <ul>
            {data.map((link) => (
              <li>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
            <li>
              <a>
                <IoLocationSharp />{country.name}
              </a>
            </li>
          </ul>
        </section>
      </div>
    );
}

const data = [
    {
      name: "개인정보 보호 정책", // Privacy Center
      link: "",
    },
    {
      name: "개인정보 및 쿠키 활용 정책", // Privacy & Cookie Policy
      link: "",
    },
    {
      name: "쿠키 맞춤 설정", // Manage Cookies
      link: "",
    },
    {
      name: "Ts&Cs", // Terms & Conditions
      link: "",
    },
    {
      name: "저작권 문의", // Copyright Notice
      link: "",
    },
  ];