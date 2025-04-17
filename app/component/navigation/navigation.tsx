import styles from '../../styles/navigation.module.scss';

export default function Navigation() {
    return  (
        <div className="navigation-wrapper">
           <div className={styles['navigation-brand']}>
                <h1 className={styles['navigation-brand']}>Budgetwise.</h1>
            </div>
            <div className="navigation-menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="navigation-auth">
                <button>Login</button>
                <button>Register</button>
            </div>
          
        </div>
    )

   

}