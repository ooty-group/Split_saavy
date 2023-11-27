import React from "react";
import styles from "./styles.module.scss";
import Button from "../components/Button";

const SplitSaavy = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBar}>Split Saavy</div>
      <div className={styles.container}>
        <Button
          onClick={() => {
            console.log("Hi");
          }}
          label="Click Me!"
        />
      </div>
    </div>
  );
};

export default SplitSaavy;
