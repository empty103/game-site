import styles from './Fifteen.module.scss';
import { EMPTY_SQUARE, BOARD_SIZE, Matrix } from './const';

interface TilesProps {
    matrix: Matrix,
}

const Tiles = ({ matrix }: TilesProps) => {
    const shiftPercentage = 100;

    const tiles = matrix.flat().map((number, index) => {
        const isHidden = number === EMPTY_SQUARE;
        const x = index % BOARD_SIZE;
        const y = Math.floor(index / BOARD_SIZE);

        const style = {
            transform: `translate3D(${x * shiftPercentage}%, ${y * shiftPercentage}%, 0)`,
            transition: 'transform 0.3s ease-in-out',
        };

        const classNames = `${styles.tile} ${isHidden ? `${styles.hidden}` : ''}`;

        return (
            <button
                key={number}
                className={classNames}
                style={style}
                data-matrix-id={number}
            >
                <span>
                    {number + 1}
                </span>
            </button>
        );
    });

    return <>{tiles}</>
}

export default Tiles;