import { FC, PropsWithChildren } from "react";
import styles from './CardBody.module.css'

const CardBody: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.cardBody} data-testid="counter">{children}</div>
    )
}

export default CardBody