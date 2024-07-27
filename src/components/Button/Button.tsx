import { FC, PropsWithChildren } from "react";
import styles from './Button.module.css';

interface ButtonProps extends PropsWithChildren {
    [x: string]: any
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button type="button" className={styles.btn} {...props}>{children}</button>
    )
}

export default Button