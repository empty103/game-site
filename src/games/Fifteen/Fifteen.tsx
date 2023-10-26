import { MouseEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Fifteen.module.scss';

import { BackButton } from '../../components';
import { GameState, setMatrixes } from '../../redux/Fifteen.Slice';

import ButtonShuffle from './ButtonShuffle';
import Tiles from './Tiles';

import {
    Coordinates,
    EMPTY_SQUARE,
    INTERVAL_SHUFFLE,
    LOCAL_STORAGE_KEY,
    MAX_SHUFFLE,
    Matrix,
    WINNING_ARRAY,
} from './const';

let shuffledArrowBlock: boolean = false;
let blockedCoords: Coordinates | null = null;

const Fifteen = () => {
    const [matrix, setMatrix] = useState<Matrix>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const savedGameState = loadGameStateFromLocalStorage();

        if (savedGameState) {
            setMatrix(savedGameState.matrix);
        } else {
            setMatrix([
                [0, 1, 2, 3],
                [4, 5, 6, 7],
                [8, 9, 10, 11],
                [12, 13, 14, 15],
            ]);
        }
    }, []);

    function shuffleStart() {
        if (shuffledArrowBlock) return;
        shuffledArrowBlock = true;
        let shuffleCount = 0;
        let timer: NodeJS.Timeout | undefined;

        function shuffle() {
            randomSwapTiles(matrix);
            shuffleCount += 1;

            if (shuffleCount >= MAX_SHUFFLE) {
                clearInterval(timer);
                shuffledArrowBlock = false;
                shuffleCount = 0;

                dispatch(setMatrixes([...matrix]));
                saveGameStateToLocalStorage({ matrix });
            };
        };

        clearInterval(timer);

        if (shuffleCount === 0) {
            timer = setInterval(shuffle, INTERVAL_SHUFFLE);
        }
    }

    function handleButtonClick(event: MouseEvent) {
        const buttonNode = (event.target as Element).closest('button');
        if (shuffledArrowBlock || !buttonNode) return;

        const buttonNodeNumber = Number(buttonNode.dataset.matrixId);
        const buttonCoords = findCoordinates(buttonNodeNumber, matrix);
        const emptyCoords = findCoordinates(EMPTY_SQUARE, matrix);
        const isValid = isValidSwapTile(buttonCoords, emptyCoords);

        if (isValid) swapTile(emptyCoords, buttonCoords, matrix);
        saveGameStateToLocalStorage({ matrix });
    }

    function randomSwapTiles(matrix: Matrix) {
        const emptyCoords = findCoordinates(EMPTY_SQUARE, matrix);
        if (!emptyCoords) return;
        const validCoords = findValidCoords(emptyCoords, matrix, blockedCoords);

        const swapCoords = validCoords[Math.floor(Math.random() * validCoords.length)];
        swapTile(emptyCoords, swapCoords, matrix);
        blockedCoords = emptyCoords;
    }

    function findValidCoords(
        emptyCoords: Coordinates,
        matrix: Matrix,
        blockedCoords: Coordinates | null
    ): Coordinates[] {
        const validCoords: Coordinates[] = [];

        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (isValidSwapTile([x, y], emptyCoords)) {
                    if (!blockedCoords || !(blockedCoords[0] === x && blockedCoords[1] === y)) {
                        validCoords.push([x, y]);
                    }
                }
            }
        }
        return validCoords;
    }

    function findCoordinates(number: number, matrix: Matrix): Coordinates {
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] === number) {
                    return [x, y];
                }
            }
        }
        return null;
    }

    function isValidSwapTile(coords1: Coordinates, coords2: Coordinates): boolean {
        if (coords1 && coords2) {
            const [x1, y1] = coords1;
            const [x2, y2] = coords2;

            const diffX = Math.abs(x1 - x2);
            const diffY = Math.abs(y1 - y2);

            return (diffX === 1 || diffY === 1) && (x1 === x2 || y1 === y2);
        }

        return false;
    }


    function swapTile(coords1: Coordinates, coords2: Coordinates, matrix: Matrix) {
        if (!coords1 || !coords2) return;

        const [x1, y1] = coords1;
        const [x2, y2] = coords2;
        const valueAtCoords1 = matrix[y1][x1];
        const valueAtCoords2 = matrix[y2][x2];
    
        matrix[y1][x1] = valueAtCoords2;
        matrix[y2][x2] = valueAtCoords1;
        
        if (checkWin(matrix)) alert("you're win")
        setMatrix([...matrix]);
    }

    function checkWin(matrix: Matrix): boolean {
        const flatMatrix = matrix.flat();

        for (let i = 0; i < WINNING_ARRAY.length; i++) {
            if (flatMatrix[i] !== WINNING_ARRAY[i]) return false;
        }

        return true;
    }

    return (
        <>
            <BackButton />
            <div className={styles.page}>
                <div className={styles.game__blocked}>
                    <div className={styles.fifteen} onClick={(event) => handleButtonClick(event)}>
                        <Tiles matrix={matrix} />
                    </div>

                    <ButtonShuffle shuffleStart={shuffleStart} />
                </div>
            </div>
        </>
    );
}

const saveGameStateToLocalStorage = (gameState: GameState) => {
    const gameStateJSON = JSON.stringify(gameState);
    localStorage.setItem(LOCAL_STORAGE_KEY, gameStateJSON);
}

const loadGameStateFromLocalStorage = () => {
    const gameStateJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (gameStateJSON) {
        const gameState = JSON.parse(gameStateJSON);
        return gameState;
    }
}

export default Fifteen;