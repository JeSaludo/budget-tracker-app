import styles from "./styles/home/home.module.scss";
import CreditCard from "./component/home/creditcard";
import Navigation from "./component/layout/navigation/navigation";
export default function Home() {
	return (
		<div className={styles["home-wrapper"]}>
			<Navigation />
			<CreditCard />
		</div>
	);
}
