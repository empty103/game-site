import { format } from 'date-fns';

import styles from './ArticlesPage.module.scss';
import FlexibilityImg from '../img/mejorar-memoria.jpg';

import { CustomLink } from '../../components';
import Aside from '../../components/aside/Aside';

const ArticlesPage = () => {
    return (
        <>
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
