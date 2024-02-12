import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Paragraph from "../../paragraph";
import Word from "../../word";
import Section from "./section";

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
                    <Paragraph value={["What", "비전과 연구 목표 — 무엇을 연구하나요?"]} />
                    <Word value={paragraph1} />
                </div>
            </section>
            <section className={styles.aboutus}>
                <div className={styles.aboutus__inner}>
                    <Word value={paragraph2} />
                </div>
            </section>

            {/* 3번 섹션 - 프로젝트 */}
            <section className={styles.aboutus}>
                <Paragraph value={["OUR PROJECTS", "진행중/완료된 프로젝트"]} />
                {/* 1 */}
                <div className={styles.aboutus__inner}>
                    <div className={styles.container}>
                        <div className={styles.body}>
                            <div className={styles.description}>
                                <p>차세대 네트워크<br/>(1년차)</p>
                                <p>임헌국(PI), Research on Interest/Data Packet Control and Forwarding Scheme for Connected Car Infotainment Application Service in Vehicular NDN, 한국연구재단 중견연구자 지원사업 (NRF), 2021.03.01~2022.2.28 </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className={styles.aboutus__inner}>
                    <div className={styles.container}>
                        <div className={styles.body}>
                            <div className={styles.description}>
                                <p>차세대 네트워크<br />(2년차)</p>
                                <p>임헌국(PI), Research on Interest/Data Packet Control and Forwarding Scheme for Connected Car Infotainment  Application Service in Vehicular NDN, 한국연구재단 중견연구자 지원사업 (NRF), 2023.03.01~2024.2.28</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className={styles.aboutus__inner}>
                    <div className={styles.container}>
                        <div className={styles.body}>
                            <div className={styles.description}>
                                <p>차세대 네트워크<br />(3년차)</p>
                                <p>임헌국(PI), 차량 엔디엔 환경하에서 인포테인먼트 서비스 실현을 위한 패킷 제어 및 포워딩 기법 연구, 한국연구재단 중견연구자 지원사업 (NRF), 2022.03.01~2023.2.28 </p>
                            </div>
                            <div className={styles.tagsContainer}>
                                <p>관련 분야</p>
                                <div className={styles.tags}>
                                    <p>차세대 네트워크</p>
                                    <p>패킷 제어</p>
                                    <p>패킷 포워딩</p>
                                    <p>NDN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 4 */}
            <section className={styles.aboutus}>
                <div className={styles.aboutus__inner}>
                    <div className={styles.container}>
                        <div className={styles.body}>
                            <div className={styles.description}>
                                <p>차량용 AI 객체 인식 </p>
                                <p>임헌국(PI), 자율주행 차량용 이미지 기반 객체인식 AI 기술 개발, 대전​​·세종·충남 지역혁신플랫폼 모빌리티 ICT사업본부  글로벌선도기술지원사업, 2022.09.15 ~ 2023.02.28</p>
                            </div>
                            <div className={styles.tagsContainer}>
                                <p>관련 분야</p>
                                <div className={styles.tags}>
                                    <p>AI</p>
                                    <p>이미지 처리 기술</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.aboutus__inner}>
                    <div className={styles.container}>
                        <div className={styles.body}>
                            <div className={styles.description}>
                                <p>학술연구비 프로젝트</p>
                                <p>임헌국(PI), ndnSIM을 이용한 NDN 네트워크 구현 및 성능 평가, 호서대 학술연구비 프로젝트, 2021.3.01 ~ 2022.02 28 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.aboutus__inner}>
                    <div className={styles.container}>
                        <div className={styles.body}>
                            <div className={styles.description}>
                                <p>학술연구비 프로젝트</p>
                                <p>임헌국(PI), 네임드 데이터 네트워킹 기반의 차량 정보/컨텐트 서비스를 위한 현존 전달 기법 분석, 호서대 학술연구비 프로젝트, 2020.3.01 ~ 2021.02 28</p>
                            </div>
                            <div className={styles.tagsContainer}>
                                <p>관련 분야</p>
                                <div className={styles.tags}>
                                    <p>NDN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.aboutus}>
                <div className={styles.aboutus__inner}>
                    <div className={styles.container}>
                        <div className={styles.body}>
                            <div className={styles.description}>
                                <p>엣지 컴퓨팅</p>
                                <p>임헌국(PI), EdgeCloudSim SW 시뮬레이터를 이용한 엣지 컴퓨팅 가상 환경 개발, SW 중심 대학 산학공동 프로젝트, 2020.3.01 ~ 2021.02 28 </p>
                            </div>
                            <div className={styles.tagsContainer}>
                                <p>관련 분야</p>
                                <div className={styles.tags}>
                                    <p>엣지 컴퓨팅</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className={styles.aboutus}>
                <Paragraph value={["NEXT PROJECTS", "우리의 예정된 다음 발차취"]} />
                <div className={styles.aboutus__inner}>
                    <div className={styles.container}>
                        <div className={styles.body}>
                            <div className={styles.description}>
                                <p>5개년 프로젝트</p>
                                <p>임헌국(Researcher), Next-generation Display Expert Training Project for Innovation Process and Equipment, Materials Engineers, the Competency Development Program for Industry Specialists of the Korean Ministry of Trade, Industry and Energy (MOTIE), operated by KIAT (Project Number: P0012453), 2020.03.01 ~ 2025.02.28</p>
                            </div>
                            <div className={styles.tagsContainer}>
                                <p>관련 분야</p>
                                <div className={styles.tags}>
                                    <p>차세대 네트워크</p>
                                    <p>VNDN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 연구원 */}
            <section className={styles.aboutus}>
                <Paragraph value={["OUR MEMBERS", "참여 리서쳐 & 연구원"]} />
                <div className={styles.aboutus__inner}>
                </div>
            </section>
        </>
    )
}