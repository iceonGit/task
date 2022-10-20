import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio id
          illo perspiciatis eaque in nemo. Et iusto odit, mollitia, soluta porro
          quae nesciunt tenetur esse alias minima, unde libero asperiores.
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio id
          illo perspiciatis eaque in nemo. Et iusto odit, mollitia, soluta porro
          quae nesciunt tenetur esse alias minima, unde libero asperiores.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}> Random People</a>
        </Link>
      </div>
    </>
  );
}
