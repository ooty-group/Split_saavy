import React from "react";
import styles from "./styles.module.scss";

interface IProps {
  onClick: () => void;
  label: string;
}

const Button = ({ onClick, label }: IProps) => {
  return (
    <div className={styles["button-wrapper"]} onClick={onClick}>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default Button;
