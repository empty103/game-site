import { Button } from "../../components";
import styles from './Fifteen.module.scss';

interface ButtonShuffleProps {
    shuffleStart: () => void,
}

const ButtonShuffle = ({ shuffleStart }: ButtonShuffleProps) => {
    return (
        <Button
            bgColor='grey'
            width='small'
            className={styles.btn}
            onClick={shuffleStart}
        >
            shuffle
        </Button>
    );
}

export default ButtonShuffle;