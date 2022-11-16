import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>The Homepage of My Twitter</h1>
        <h2>This is an attempt to recreate a version of twitter</h2>
      </main>
    </div>
  );
}
