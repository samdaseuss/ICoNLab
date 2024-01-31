import styles from "../../styles/forgot.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { BiLeftArrowAlt } from "react-icons/bi";
import CircledIconBtn from "../../components/buttons/circledIconBtn";
import LoginInput from "../../components/inputs/loginInput";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import DotLoaderSpinner from "../../components/loader/dotLoader";
import axios from "axios";
import { getSession } from "next-auth/react";

export default function forgot() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const emailValidation = Yup.object({
    email: Yup.string()
      .required("이메일은 로그인 시 필수 입력사항 입니다.")
      .email("유효하지 않은 이메일 주소입니다."),
  });
  const forgotHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "/api/auth/forgot", {email}
      );
      setError("");
      setSuccess(data.message);
      setLoading(false);
      setEmail("");
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
              비밀번호를 잊어버리셨나요? <Link href="/">로그인 하러가기</Link>
            </span>
          </div>
          <Formik
            enableReinitialize
            initialValues={{
              email,
            }}
            validationSchema={emailValidation}
            onSubmit={() => {
              forgotHandler();
            }}
          >
            {(form) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  icon="email"
                  placeholder="이메일을 입력하세요."
                  onChange={(e) => setEmail(e.target.value)}
                />
                <CircledIconBtn type="submit" text="이메일 보내기" />
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