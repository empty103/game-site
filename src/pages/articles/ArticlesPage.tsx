import { format } from 'date-fns';

import styles from './ArticlesPage.module.scss';
import FlexibilityImg from '../img/mejorar-memoria.jpg';

import { CustomLink } from '../../components';
import Aside from '../../components/aside/Aside';
import { Helmet } from 'react-helmet-async';

const ArticlesPage = () => {
    return (
        <>
            <Helmet>
                <title>Brain Training Articles</title>
                <meta name="keywords" content="intellect, games, abilities, play, free" />
                <meta property="og:url" content="https://www.brainTraining.com/articles" />
                <meta name="description" content="Explore a collection of intellectual games designed to 
                enhance logical thinking and provide an enjoyable pastime. Test your intellect and skills 
                with our selection of free games."/>
                <meta property="og:locale" content="en_US" />
                <meta property="og:title" content="Brain Training" />
            </Helmet>

            <header className={styles.header}>
                <h1>Brain Training</h1>
                <input type="text" className={styles.search} />
            </header>

            <main className={styles.main}>
                <article className={styles.article__main}>
                    <CustomLink to='/articles/flexibility'>
                        <span className={styles.article__text}>Flexibility</span>
                        <img src={FlexibilityImg} alt="FlexibilityImg" />
                    </CustomLink>
                </article>

                <article className={styles.article__addition1}>
                    <CustomLink to='/articles/flexibility'>
                        <span className={styles.article__text}>Flexibility</span>
                        <img src={FlexibilityImg} alt="FlexibilityImg" />
                    </CustomLink>
                </article>

                <article className={styles.article__addition2}>
                    <CustomLink to='/articles/flexibility'>
                        <span className={styles.article__text}>Flexibility</span>
                        <img src={FlexibilityImg} alt="FlexibilityImg" />
                    </CustomLink>
                </article>

                <Aside className={styles.aside}></Aside>
            </main>

            <footer className={styles.footer}>
                <p>Brain Training (c) - {format(new Date(), 'yyyy')} Все права защищены</p>
                <a href="/user-agreement" target='_blank'>Пользовательское соглашение</a>
                <a href="/privacy-policy" target='_blank'>Политика конфиденциальности</a>
            </footer>
        </>
    );
}

export default ArticlesPage;
