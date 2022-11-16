import React from "react";

import styles from "./AuthForm.module.css";

const AuthForm = () => {
  return (
    <section className={styles.auth}>
      <form>
        <div className={styles.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required />
        </div>
        <div className={styles.actions}>
          <button className={styles.toggle} type="button">
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
