export const BOARD_SIZE = 4;
export const MAX_SHUFFLE = 32;
export const TOTAL_TILES = BOARD_SIZE * BOARD_SIZE;
export const EMPTY_SQUARE = TOTAL_TILES - 1;
export const WINNING_ARRAY = Array.from({ length: TOTAL_TILES }, (_, index) => index);
export const LOCAL_STORAGE_KEY = 'fifteen-game-state';
export const INTERVAL_SHUFFLE = 300;

export type Matrix = number[][];
export type Coordinates = [number, number] | null;
