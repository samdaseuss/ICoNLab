import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import LoginInput from "@/components/inputs/loginInput";
import styles from "../styles/signin.module.scss";
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
                <div className={styles.login}>
                    <div className={styles.login__container}>
                        <div className={styles.login__header}>
                            <div className={styles.back__svg}>
                                <Link href="/">
                                    <BiLeftArrowAlt />
                                </Link>
                            </div>
                            <span>
                                클릭 시 ICoN 랩 메인 화면으로 돌아갑니다.
                            </span>
                        </div>
                        <div className={styles.login__form}>
                            <h1>연구원 로그인</h1>
                            <p>ICoN Lab의 연구원이시면 로그인 후 이용하세요.</p>
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    login_email,
                                    login_password,
                                }}
                                validationSchema={loginValidation}
                            >
                                {(form) => (
                                    <Form>
                                        <LoginInput
                                          type="text"
                                          name="login_email"
                                          icon="email"
                                          placeholder="Email Address"
                                          onChange={handleChange}
                                        />
                                        <LoginInput
                                          type="text"
                                          name="login_password"
                                          icon="password"
                                          placeholder="Password"
                                          onChange={handleChange}
                                        />
                                        <CircledIconBtn type="submit" text="로그인하기" />
                                        <div className={styles.forgot}>
                                            <Link href="/forget">패스워드를 잃어버렸습니다.</Link>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            <div className={styles.login__socials}>
                                <span className={styles.or}>소셜로 시작하기</span>
                                <div className={styles.login__socials_wrap}>
                                { providers.map((provider)=>(
                                    <div key={provider.name}>
                                        <button
                                          className={styles.social__btn}
                                          onClick={() => signIn(provider.id)}
                                        >
                                            <img src={`../../icons/${provider.name}.png`} alt="" />
                                            {provider.name}로 로그인하기
                                        </button>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.login__container}>
                        <div className={styles.login__form}>
                            <h1>연구원 회원가입</h1>
                            <p>신규 연구원은 회원가입 후 연구원 전용 권한을 부여받게 됩니다.</p>
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    name,
                                    email,
                                    password,
                                    conf_password
                                }}
                                validationSchema={registerValidation}
                                onSubmit={()=>(
                                    signUpHandler()
                                )}
                            >
                                {(form) => (
                                    <Form>
                                        <LoginInput
                                          type="text"
                                          name="name"
                                          icon="user"
                                          placeholder="Full Name"
                                          onChange={handleChange}
                                        />
                                        <LoginInput
                                          type="text"
                                          name="email"
                                          icon="email"
                                          placeholder="Email Address"
                                          onChange={handleChange}
                                        />
                                        <LoginInput
                                          type="password"
                                          name="password"
                                          icon="password"
                                          placeholder="password"
                                          onChange={handleChange}
                                        />
                                        <LoginInput
                                          type="password"
                                          name="conf_password"
                                          icon="password"
                                          placeholder="Re-Type password"
                                          onChange={handleChange}
                                        />
                                        <CircledIconBtn type="submit" text="회원가입" />
                                    </Form>
                                )}
                            </Formik>
                            <div>{success && <span className={styles.success}> {success}</span>}</div>
                            <div>{error && <span className={styles.error}> {error}</span>}</div>
                        </div>
                    </div>
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