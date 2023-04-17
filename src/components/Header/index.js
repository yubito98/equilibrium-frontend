import Link from 'next/link';
import styles from './styles.module.css';


const Header = () =>{


    return(
        <header className={styles.header} >
            <h4>
                <Link href='/' >Equilibrium.com</Link>
            </h4>
            <div className={styles.menu}>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                </ul>
                <div className={styles.buttonsContainer} >
                    <Link className='btn-primary' href="/sign-up">Log In</Link>
                    <Link className='btn-secondary' href="/sign-up">Sign Up</Link>
                </div>
            </div>
        </header>
    )
}


export default Header