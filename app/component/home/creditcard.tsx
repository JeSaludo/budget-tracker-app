import Image from "next/image";
import styles from "../../styles/home/creditcard.module.scss";

export default function CreditCard() {
    return (
        <div className={styles['credit-card-wrapper']}>
            <Image 
                src="/assets/credit-card.png" 
                alt="home" 
                fill={true}
            />
        </div>
    );
}