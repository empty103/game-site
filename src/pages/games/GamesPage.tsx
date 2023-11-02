import { BackButton, CustomLink } from "../../components";
import { Helmet } from "react-helmet-async";

import styles from './GamesPage.module.scss';
import TicTacImg from '../img/tictac.jpg';
import FifteenImg from '../img/fifteen.jpg';

const GamesPage = () => {
    return (
        <>
            <Helmet>
                <title>Intellectual Games - Play and Develop Your Mind</title>
                <meta name="keywords" content="intellect, games, abilities, play, free" />
                <meta property="og:url" content="https://www.brainTraining.com/games" />
                <meta name="description" content="Explore a collection of intellectual games designed to 
                enhance logical thinking and provide an enjoyable pastime. Test your intellect and skills 
                with our selection of free games."/>
                <meta property="og:locale" content="en_US" />
                <meta property="og:title" content="Brain Training" />
            </Helmet>


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