import { CustomLink } from '../../components';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <CustomLink to='/games' className={styles.logo}>Games</CustomLink>

                    <ul className={styles.nav__links}>
                        <li className={styles.link}>
                            <a href="">
                                We
                            </a>
                        </li>

                        <li>
                            <a href="#" className={styles.link}>
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#" className={styles.link}>
                                Contacts
                            </a>
                        </li>

                        <li>
                            <CustomLink to='/articles' className={styles.link}>
                                Articles
                            </CustomLink>
                        </li>
                    </ul>
                </nav>
            </div>


        </header >
    );
}

export default Header;
