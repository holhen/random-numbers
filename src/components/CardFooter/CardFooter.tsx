import { FC, PropsWithChildren } from "react";
import styles from './CardFooter.module.css';

const CardFooter: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.cardFooter}>{children}</div>
    )
}

export default CardFooter