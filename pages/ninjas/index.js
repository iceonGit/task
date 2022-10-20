import React from "react";
import styles from "../../styles/Ninja.module.css";
import Link from "next/link";

//async function used to generate data at build time
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>Users</h1>
      {ninjas.map((ninja) => {
        return (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a>
              <h3 className={styles.single}>{ninja.name}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Ninjas;
