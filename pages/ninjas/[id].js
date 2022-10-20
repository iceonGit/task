import styles from "../../styles/Home.module.css";

export const getStaticPaths = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return { paths: paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  return {
    props: { ninja: data },
  };
};
const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p className={styles.text}>{ninja.email}</p>
      <p className={styles.text}>{ninja.website}</p>
      <p className={styles.text}>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
