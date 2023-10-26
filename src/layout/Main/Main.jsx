import styles from './Main.module.scss';
import { Button, CustomLink } from '../../components';

const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={`${styles.welcome} ${styles.animation__text}`}>Welcome to you</h1>
                <p className={styles.animation__text}>get better with us</p>

                <button className={styles.btn}>
                    <CustomLink to='/games'>start training</CustomLink>
                </button>
            </div>
        </main>
    );
}

export default Main;
