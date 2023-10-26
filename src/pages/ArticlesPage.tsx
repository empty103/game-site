import { format } from 'date-fns';
import styles from './ArticlesPage.module.scss';

import FlexibilityImg from './img/mejorar-memoria.jpg';
import { CustomLink } from '../components';

const ArticlesPage = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>Brain Training</h1>
                <input type="text" className={styles.search} />
            </header>

            <main className={styles.main__content}>
                <article className={styles.article__main}>
                    <CustomLink to='/articles/flexibility'>
                        <img src={FlexibilityImg} alt="FlexibilityImg" />
                    </CustomLink>
                </article>

                <article className={styles.article__addition1}>
                    <img src={FlexibilityImg} alt="FlexibilityImg" />

                </article>

                <article className={styles.article__addition2}>
                    <img src={FlexibilityImg} alt="FlexibilityImg" />
                </article>

                <aside className={styles.aside}>
                    <div className={styles.info}>информация</div>
                </aside>
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
