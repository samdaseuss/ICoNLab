import Link from "next/link";
import styles from "./styles.module.scss";

export default function Payment() {
    return (
        <div className={styles.footer__payment}>
            <h3>제공 결제 서비스</h3>
            <div className={styles.footer__flexwrap}>
                <img src="https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png" alt="" />
                <img src="https://i.namu.wiki/i/ATlSjCDsgHllTrLHfIhpLkCniCAaIgpkRx9CaYv2ID8xgEo_u6eb8LirzUg_BBgtw06MfynXzFg2gskMNU-cIlZECzBTr2Q_VLH7mYMoICdOFS2-4JbQBWV9LdoDySSh9pgcxjLryRmiFJOz2_vjtw.svg" alt="" />
                <img src="https://i.namu.wiki/i/-NDJg4PI--wSlNlONAynWmT5iF_0UtjFfG5Xbf4l8dzlFxt5NspyJFMECx41ZVAEt9SGZTiiLXIVweXYhW4XW2wSmXvpqdW85OVdVn2ilo44qVrHIpytJrxJtRklAYgSWEW5jsIIe-g9bdbZJuSmaA.svg" alt="" />
            </div>
        </div>
    );
}