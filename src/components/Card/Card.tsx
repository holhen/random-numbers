import { FC, PropsWithChildren } from "react";
import styles from "./Card.module.css";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.card} data-testid="card">
      {children}
    </div>
  );
};

export default Card;
