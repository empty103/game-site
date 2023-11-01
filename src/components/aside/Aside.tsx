import styles from './Aside.module.scss';
import { AsideProps } from './Aside.props';

const Aside = ({ className }: AsideProps) => {
    return (
        <aside className={`${styles.aside} ${className}`}>
            <div className={styles.info}>
                our articles
            </div>
        </aside>
    );
}

export default Aside;