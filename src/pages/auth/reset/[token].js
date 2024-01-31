import styles from "../../../styles/forgot.module.scss";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { BiLeftArrowAlt } from "react-icons/bi";
import CircledIconBtn from "../../../components/buttons/circledIconBtn";
import LoginInput from "../../../components/inputs/loginInput";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import DotLoaderSpinner from "../../../components/loader/dotLoader";
import axios from "axios";
import { getSession, signIn } from "next-auth/react";
import jwt from 'jsonwebtoken';
import { Router } from "next/router";

export default function reset({ user_id }) {
  const [password, setPassword] = useState("");
  const [conf_passsword, setConf_password] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const passwordValidation = Yup.object({
    password: Yup.string()
          .required("비밀번호는 6자 이상 숫자와 문자와 문장 부호(!, &) 조합으로 만들어주세요.")
          .min(6, "비밀번호는 최소 6자 이상이어야 합니다.")
          .max(36, "비밀번호는 최대 36자만 가능합니다."),
    conf_password: Yup.string()
          .required("비밀번호를 다시 한번 입력해주세요.")
          .oneOf([Yup.ref("password")], "비밀번호가 다릅니다."),
  });
  const resetHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put('/api/auth/reset', {
        user_id,
        password
      });
      let options = {
        redirect: false,
        email: data.email,
        password: password
      };
      await signIn("credentials", options);
      window.location.reload(true);
      setError("");
      setLoading(false);
      Router.push('/');
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };
  return (
    <>
      {loading && <DotLoaderSpinner loading={loading} />}
      <Header country="" />
      <div className={styles.forgot}>
        <div>
          <div className={styles.forgot__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              패스워드를 초기화 하시겠습니까? <Link href="/">로그인 하러가기</Link>
            </span>
          </div>
          <Formik
            enableReinitialize
            initialValues={{
              password,
              conf_passsword
            }}
            validationSchema={passwordValidation}
            onSubmit={() => {
                resetHandler();
            }}
          >
            {(form) => (
              <Form>
                <LoginInput
                  type="password"
                  name="password"
                  icon="password"
                  placeholder="패스워드를 입력하세요."
                  onChange={(e) => setPassword(e.target.value)}
                />
                <LoginInput
                  type="password"
                  name="conf_password"
                  icon="password"
                  placeholder="패스워드를 재입력하세요."
                  onChange={(e) => setConf_password(e.target.value)}
                />
                <CircledIconBtn type="submit" text="패스워드 변경하기" />
                <div style={{ marginTop: "10px" }}>
                  { error && <span className={styles.error}>{error}</span> }
                  { success && <span className={styles.success}>{success}</span> }
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer country="" />
    </>
  );
}

export async function getServerSideProps(context) {
    const { query, req } = context; // { token: '6475d30ace91f2f811e1cd07' }
    const token = query.token; // 6475d30ace91f2f811e1cd07
    console.log(process.env.RESET_TOKEN_SECRET)
    const user_id = jwt.verify( token, process.env.RESET_TOKEN_SECRET );
    return {
        props: { user_id : user_id.id }
    }
}