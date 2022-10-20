import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1>About</h1>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio id illo
        perspiciatis eaque in nemo. Et iusto odit, mollitia, soluta porro quae
        nesciunt tenetur esse alias minima, unde libero asperiores.
      </p>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio id illo
        perspiciatis eaque in nemo. Et iusto odit, mollitia, soluta porro quae
        nesciunt tenetur esse alias minima, unde libero asperiores.
      </p>
    </div>
  );
};

export default About;
