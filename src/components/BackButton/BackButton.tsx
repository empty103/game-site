import { useNavigate } from "react-router-dom";
import styles from './BackButton.module.scss';

export const BackButton = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.back}>
            <button 
                className={styles.back__btn}
                onClick={() => navigate(-1)}
            >
                Back
            </button>
        </div>
    );
}
