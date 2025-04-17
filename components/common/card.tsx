import type React from "react";
import styles from "@/styles/components/card.module.scss";
interface CardProps {
	children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
	return (
		<div className={styles["card-wrapper"]}>
			<div>{children}</div>
		</div>
	);
};

export default Card;
