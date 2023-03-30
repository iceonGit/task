import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { CodeBlock, solarizedDark } from "react-code-blocks";

const codeSnippet = `const getTodos = async () => {
  const response = await fetch("todos/luigi.json");
  const data = await response.json();
  return data;
};

getTodos().then((data) => {
  console.log("Resolved", data);
});
`;

const codeSnippet1 = `function returnPromises() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise Executed...");
      resolve("Sample Data");
    }, 3000);
  });
}

async function func() {
  var newData = "Luigi says hi!";
  var getData = await returnPromises();
  console.log(getData);
  console.log(newData);
}

func()`;
const codeSnippet2 = `Promise Executed... debugger eval code:4:15
Sample Data debugger eval code:13:11
Luigi says hi! debugger eval code:14:11

​`;
console.log(typeof codeSnippet);
// const NewComponent = CodeBlock("javascript", codeSnippet);
export default function Home() {
  return (
    <>
      <Head>
        <title>Assignment</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="example">
        <h1 className={styles.title}>Async/Await</h1>
        <img
          className={styles.delivery1}
          src="https://img.freepik.com/free-vector/delivery-man-waiting-food_56104-672.jpg?w=360"
          alt="waiting for delivery png"
        />
        <p className={styles.text}>
          When you want to do something that takes a long time to finish, like
          waiting for a toy to be delivered or waiting for a cake to bake, you
          usually have to wait patiently for it to finish. It's the same with
          programming: sometimes you need to do something that takes a long
          time, like waiting for data to be fetched from the internet. But if
          you just wait around for the data to arrive, your program will stop
          and won't be able to do anything else until the data is fetched.
          That's where the asynchronous functions come in.
        </p>
        <p className={styles.text}>
          Remember the fetch() .then() .then() and a long chain of .then()s
          ,yeah it is tedious and a nightmare to debug, here is where the
          Async/await function comes into play. It was first introduced in ES8
          (2017) and it is simply a syntactical sugar for .fetch() and .then()
          functions. It is not a new function, but simply a new way of writing
          asynchronous functions that returns a promise which makes the code
          easier to read and debug. Let us see this concept in practice with a
          working example
        </p>
        <CodeBlock
          text={codeSnippet}
          language="javascript"
          showLineNumbers={true}
          theme={solarizedDark}
        />
        <p className={styles.text}>
          The above snippet is one of the great usage of async & await in terms
          of fetch and return a promise. Async functions start with the keyword
          “async” before declaring the function name, and inside the function we
          can use await to fetch and return promises.
        </p>
        <img
          src="https://quickbirdstudios.com/wp-content/uploads/2022/11/Async-Await-1024x518.png"
          className={styles.delivery3}
          alt="await"
        />
        <p className={styles.text}>
          Adding “await” before a promise makes the execution thread to wait for
          asynchronous task/promise to resolve before proceeding further. When
          we are adding the “await” keyword, we are introducing synchronous
          behavior to the application. Even the promises will be executed
          synchronously.
        </p>
        <img
          className={styles.delivery2}
          src="https://img.freepik.com/premium-vector/delivery-cute-girl-holding-cardboard-box-food-delivery-shipping-logo-hand-draw-vector-illustration_56104-2131.jpg?w=360"
          alt="delivered png"
        />
        <CodeBlock
          text={codeSnippet1}
          language="javascript"
          showLineNumbers={true}
          theme={solarizedDark}
        />
        <h3>The output for the above code is:</h3>
        <CodeBlock
          text={codeSnippet2}
          language="javascript"
          showLineNumbers={true}
          theme={solarizedDark}
        />
        <p className={styles.text}>
          In the above code, the following things happen:
          <ul>
            <li>
              “returnPromise()” returns a Promise which needs to wait at least
              for 3 seconds before getting resolved.
            </li>
            <li>
              We have updated the “await” keyword in front of the function call,
              which forces the promise to be resolved before the code is
              executed further
            </li>
            <li>
              After a delay of 3 seconds, the promise will be resolved and the
              further execution of the code will resume. It introduces
              synchronous behavior
            </li>
            <li>
              “async” keyword needs to be updated in front of functions that
              contain ”await” keyword to notify that the result might be
              available after a certain delay since we are explicitly making the
              main thread wait until the promise has been resolved.
            </li>
            <li>
              Await and Async has introduced synchronous behavior to the
              Execution.
            </li>
          </ul>
        </p>
        <br />
        <p className={styles.text}>
          So that's a basic introduction to async/await in JavaScript. It allows
          your program to keep doing other things while it's waiting for
          something else to finish, making it more efficient and responsive.
        </p>
      </div>
    </>
  );
}
