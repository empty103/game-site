import { BackButton, CustomLink } from "../components";

import styles from './GamesPage.module.scss';
import TicTacImg from './img/tictac.jpg';
import FifteenImg from './img/fifteen.jpg';

const GamesPage = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.container}>

                    <BackButton />

                    <div className={styles.games__row}>
                        <CustomLink to="/games/tic-tac-toe" className={styles.game}>
                            <img src={TicTacImg} alt="TicTac" className={styles.game__image} />
                            <h3 className={styles.game__title}>Tic Tac Toe</h3>
                        </CustomLink>

                        <CustomLink to="/games/fifteen" className={styles.game}>
                            <img src={FifteenImg} alt="TicTac" className={styles.game__image} />
                            <h3 className={styles.game__title}>Fifteen</h3>
                        </CustomLink>
                    </div>

                </div>
            </main>
        </>
    );
}

export default GamesPage;