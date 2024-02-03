import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import LoginInput from "@/components/inputs/loginInput";
import styles from "../styles/contact.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import CircledIconBtn from "@/components/buttons/circledIconBtn";
import { getProviders, signIn } from "next-auth/react";
import axios from "axios";
import DotLoaderSpinner from "@/components/loader/dotLoader";
import Router from 'next/router';


const initialvalues = {
    login_email: "",
    login_password: "",
    full_name: "",
    email: "",
    conf_password: "",
    success: "",
    error: ""
};

export default function signin({providers}) {
    const [ loading, setLoading ] = useState(false); 
    const [ user, setUser ] = useState(initialvalues);
    const { 
        login_email,
        login_password,
        name,
        email,
        password,
        conf_password,
        success,
        error
    } = user;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value });
    }
    const loginValidation = Yup.object({
        login_email: Yup.string().required("이메일 주소가 필요합니다").email('유효한 이메일 주소를 입력해주세요'),
        login_password: Yup.string().required("패스워드를 입력해주세요")
    })
    const registerValidation = Yup.object({
        name: Yup.string()
          .required("이름을 입력해주세요.")
          .min(2, "2글자에서 16글자 사이로 입력해주세요.")
          .max(16, "2글자에서 16글자 사이로 입력해주세요.")
          .matches(/^[aA-zZ]/, "숫자와 특수문자는 입력할 수 없습니다."),
        email: Yup.string()
          .required("로그인과 탈퇴를 위해 필요한 필수 입력 정보입니다.")
          .email("올바른 이메일 주소를 입력해주세요."),
        password: Yup.string()
          .required("비밀번호는 6자 이상 숫자와 문자와 문장 부호(!, &) 조합으로 만들어주세요.")
          .min(6, "비밀번호는 최소 6자 이상이어야 합니다.")
          .max(36, "비밀번호는 최대 36자만 가능합니다."),
        conf_password: Yup.string()
          .required("비밀번호를 다시 한번 입력해주세요.")
          .oneOf([Yup.ref("password")], "비밀번호가 다릅니다."),
    });
    const signUpHandler = async () => {
        try {
            setLoading(true);
            const { data } = await axios.post('/api/auth/signup', {
                name,
                email,
                password,
            });
            setUser({...user, error: "", success: data.message})
            setLoading(false);
            setTimeout(() => { Router.push("/"); }, 2000);
        } catch(error) {
            setLoading(false);
            setUser({...user, success: "", error: error.response.data.message} );
        }
    }
    return (
        <>
        { loading && <DotLoaderSpinner loading={loading}/> }
            <Header country="South Korea"/>
                <div>
                    <section className={`${styles.contact} ${styles.section}`}>
                        <div className={styles.contact__wrapper}>
                            <div className={styles.contact__header}>
                                <div className={styles.section__header_title}>연구원으로 지원하기</div>
                                <div className={styles.section__header_subtitle}>아래 지원서를 입력하고 ICoN 연구실 연구학생에 지원해보세요.</div>
                            </div>
                        </div>
                        <div className={styles.contact__form}>
                            <form action="#" method="POST" class="form">
                                <div className={styles.form__flex}>
                                    <div className={styles.form__info}>
                                        <label>안녕하세요, 저는 </label>
                                        <input type="text" placeholder="학번을 입력해주세요"></input>
                                    </div>
                                </div>
                                <div className={styles.form__flex}>
                                    <div className={styles.form__info}>
                                        <input 
                                            type="text"
                                            placeholder="이름을 입력해주세요"
                                            name="이름"
                                            required
                                        />입니다.
                                    </div>
                                </div>
                                <div className={styles.form__flex}>
                                    <div className={styles.form__info}>
                                            ICoN 연구실에 학생 연구원으로 지원하고 싶어서 연락드립니다.
                                        </div>
                                    </div>
                                <div className={styles.form__flex}>
                                    <div className={styles.form__info}>
                                        <label>이메일 주소</label>
                                        <input
                                            type="email"
                                            placeholder="이메일 주소를 입력해주세요"
                                            name="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={styles.form__flex}>
                                    <div className={styles.form__info}>
                                        <label>나의 현재 학년</label>
                                        <input
                                            type="text"
                                            placeholder="3학년"
                                            name="학년"
                                            required    
                                        />
                                    </div>
                                </div>
                                <div className={styles.form__flex}>
                                    <div className={styles.form__info}>
                                        <label>나의 전공트랙</label>
                                        <input
                                            type="text"
                                            placeholder="ex. 사물인터넷"
                                            name="전공트랙"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={styles.form__flex}>
                                    <div className={styles.form__info}>
                                        <label>전공 관심 분야</label>
                                        <input
                                            type="text"
                                            placeholder="ex. 웹 서비스 개발, AI"
                                            name="전공 관심 분야"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={styles.form__flex}>
                                    <div className={styles.form__info}>
                                        <textarea
                                            placeholder="여기에 자기소개를 300자 이내로 작성해주세요."
                                            cols="30"
                                            rows="5"
                                            name="자기소개서"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={styles.form__flex}>
                                    <button className={styles.coolButton}>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            <Footer country="South Korea"/>
        </>
    );
}

export async function getServerSideProps(context) {
    const providers = Object.values(await getProviders());
    return { 
        props: { providers }
    };
}