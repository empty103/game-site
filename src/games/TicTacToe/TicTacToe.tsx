import { useEffect, useState } from 'react';

import styles from './TicTacToe.module.scss';

import { BackButton, Button } from '../../components';
import {
    BOARD_SIZE,
    COMPUTER_MOVE_DELAY,
    SquareValue,
    WIN
} from './const';

const TicTacToe = () => {
    const [board, setBoard] = useState<SquareValue[]>(Array(BOARD_SIZE).fill(null));
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [isComputerTurn, setIsComputerTurn] = useState<boolean>(false);

    useEffect(() => {
        if (isComputerTurn) {
            const computerMoveTimeout = setTimeout(computerMove, COMPUTER_MOVE_DELAY);

            return () => clearTimeout(computerMoveTimeout);
        }
    }, [isComputerTurn]);

    const humanMove = (index: number) => {
        return () => {
            if (isWinner(board) || board[index] || isComputerTurn) return;

            const newSquares = [...board];
            if (xIsNext) {
                newSquares[index] = 'X';
            }

            setBoard(newSquares);
            if (!isWinner(newSquares)) {
                setXIsNext(!xIsNext);
                setIsComputerTurn(true);
            }
        };
    }

    const computerMove = (): void => {
        if (isWinner(board) || isBoardFull(board)) {
            setIsComputerTurn(false);
            return;
        }

        const emptySquares = board
            .map((s, index) => (s === null ? index : -1))
            .filter((index) => index !== -1);

        if (emptySquares.length === 0) {
            setIsComputerTurn(false);
            return;
        }

        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        const computerMove = emptySquares[randomIndex];

        const newSquares = [...board];
        newSquares[computerMove] = 'O';

        setBoard(newSquares);
        setXIsNext(true);
        setIsComputerTurn(false);
    }

    const Square = (index: number): JSX.Element => {
        return (
            <button
                className={styles.square}
                key={index}
                onClick={humanMove(index)}
            >
                {board[index]}
            </button>
        );
    }

    const squares = Array(BOARD_SIZE).fill(null).map((_, index) => Square(index));

    const restart = (): void => {
        setBoard(Array(BOARD_SIZE).fill(null));
        status = '';
    };

    const winner = isWinner(board);
    let status: string;
    if (winner) {
        status = `Winner: ${winner}`;
    } else if (isBoardFull(board)) {
        status = 'Tie!';
    } else {
        status = `Current player: ${xIsNext
            ? 'X'
            : 'O'
            }`;
    }

    return (
        <>
            <BackButton />
            <div className={styles.game}>
                <div className={styles.winner}>
                    {status}
                </div>

                <div className={styles.board}>
                    {squares}
                </div>

                <Button
                    width='small'
                    bgColor='grey'
                    className={styles.restart}
                    onClick={() => restart()}
                >
                    restart
                </Button>
            </div>
        </>
    );
}

const isBoardFull = (squares: SquareValue[]): boolean => squares.every((s) => s !== null);

const isWinner = (squares: SquareValue[]): SquareValue | null => {
    for (const [a, b, c] of WIN) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

export default TicTacToe;
