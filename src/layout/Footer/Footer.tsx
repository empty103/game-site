import { format } from 'date-fns';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Brain Training (c) - {format(new Date(), 'yyyy')} Все права защищены</p>
            <a href="/user-agreement" target='_blank'>Пользовательское соглашение</a>
            <a href="/privacy-policy" target='_blank'>Политика конфиденциальности</a>
        </footer>
    );
}

export default Footer;