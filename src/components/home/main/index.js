import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Section from "./section";

export default function Main() {
    return (
        <div className={styles.main}>
            <motion.img
                initial={{ y: 400, opacity: 0}}
                animate={{ y: 200, opacity: 1}}
                transition={{
                    duration: 1,
                    ease:"easeInOut"
                }}
                src="images/logover1.png"
            />
        </div>
    )
}