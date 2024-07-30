import { FC, memo, PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  [x: string]: unknown;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button type="button" className={styles.btn} {...props}>
      {children}
    </button>
  );
};

export default memo(Button);
