import styles from '@/styles/home/home.module.scss';
import CreditCard from '@/components/home/creditcard';
import Navigation from '@/components/layout/navigation/navigation';
export default function Home() {
  return (
    <div className={styles['home-wrapper']}>
      <Navigation />
      <CreditCard />
    </div>
  );
}
