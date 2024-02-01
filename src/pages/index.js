import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/home/main';

import axios from 'axios';
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/Home.module.scss";
import db from '../../utils/db';
import Product from '../../models/Product';
import { useEffect } from "react";

import Intro from '../components/intro';
import Description from '../components/description';
import Project from '../components/project';


export default function Home({country}) {
  const { data: session } = useSession();
  

  useEffect( () => {(
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })()
  }, []);

  return (
    <>
      <Header country={country} />
      {/* { session ? "로그인 상태입니다." : "로그아웃 상태입니다."} */}
      {/* <div className={styles.home}>
        <div className={styles.container}>
          <Intro />
          <Description />
          <Project />
        </div>
      </div> */}
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps() {
  db.connectDb();
  let products = await Product.find().sort({ createdAt: -1 }).lean();
  let data = await axios
      .get(`https://api.ipregistry.co/?key=ek54eravxuscelhq`)
      .then((res) => res.data.location.country)
      .catch((err) => console.log(err))
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      country: { name: data.name, flag: data.flag.emojitwo }
      // country: {
      //   name: "South Korea",
      //   flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/250px-Flag_of_South_Korea.svg.png"
      // }
    }
  }
}
