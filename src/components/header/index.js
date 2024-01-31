import Ad from "./Ad";
import Top from "./Top";
import Main from "./Main";
import styles from "./styles.module.scss";

export default function Header({ country }) {
    return (
        <header className={styles.header}>
            <Top country={country} />
            <Main />
        </header>
    );
}