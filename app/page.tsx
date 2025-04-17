import styles from './styles/home.module.scss'

import Navigation from './component/navigation/navigation';
export default function Home() {
  return (
<div className={styles['home-wrapper']}>
      <Navigation />
    </div>  
  );
}
