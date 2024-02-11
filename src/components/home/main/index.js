import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Paragraph from "../../paragraph";
import Word from "../../word";
import Section from "./section";

const title = "What";
const subtitle = "무엇을 연구하나요?";
const paragraph1 = `우리 연구실은 스마트 차량을 위한 지능형 컴퓨팅 및 네트워킹 기술을 탐구합니다. 특히, 엣지 컴퓨팅, 인공지능 그리고 미래 네트워크에 중점을 두어 스마트 차량의 다양한 문제들을 해결하기 위해 노력하고 있습니다. 특별히, 현재 인터넷의 비효율성을 그대로 이어받아서 생기는 문제들 스마트 차량의 인포테인먼트 플랫폼 서비스에서 데이터 전환시에 데이터가 끊기는 문제, 장거리 데이터 전송 시 성능이 저하되는 문제, 그리고 차량 해킹 등과 같은 문제들을 해결하기 위해 노력합니다.`;
const paragraph2 = 
    "번뜩이는 접근을 통해 우리는 문제를 해결해보려 합니다. 우리는 이를 해결하기 위해 NDN(Named Data Networking) 기술을 스마트 차량에 적용시키려합니다. " +
    "그렇게 하면 사용자에게 데이터 기반의 인포테인먼트 서비스를 제공할 수 있게 됩니다. "+
    "우리는 VNDN(Vehicular NDN)이 스마트 운송수단에 혁신을 가져올 수 있을거라 봅니다. 운송수단이 아닌 데이터 자체에 중점을를 둔 nature of data-centric networking 사용함으로써 " +
    "이를 실현하기 위해 현재 우리는 아래 연구주제에 몰두하고 있습니다.";

export default function Main() {
    return (
        <>
            {/* 1번 섹션 - 메인 */}
            <section className={styles.main}>
                <div className={styles.main__inner}>
                        <motion.img
                                className={styles.main__inner__title}
                                initial={{ y: 500, opacity: 0}}
                                animate={{ y: 100, opacity: 1}}
                                transition={{
                                    duration: 1,
                                    ease:"easeInOut"
                                }}
                                src="images/bigtitle.png"
                        />
                        <motion.img
                                className={styles.main__inner__subtitle}
                                initial={{ y: 400, opacity: 0, width:"60%", height: "auto"}}
                                animate={{ y: 80, opacity: 1, width:"60%", height:"auto"}}
                                transition={{
                                    duration: 2,
                                    ease:"easeInOut"
                                }}
                                src="images/smalltitle.png"
                        />
                </div>
            </section>

            {/* 2번 섹션 - 핵심 연구 */}
            <section className={styles.aboutus}>
                <div className={styles.aboutus__inner}>
                    <Paragraph value={[title, subtitle]} />
                    <Word value={paragraph1} />
                    <Word value={paragraph2} />
                </div>
            </section>
        </>
    )
}