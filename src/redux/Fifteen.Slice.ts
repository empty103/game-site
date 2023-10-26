import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Matrix } from "../games/Fifteen/const";

export interface GameState {
    matrix: Matrix,
}

const initialState: GameState = {
    matrix: [[], [], [], []],
}

const fifteenSlice = createSlice({
    name: 'fifteen',
    initialState,

    reducers: {
        setMatrixes: (state: GameState, action: PayloadAction<Matrix>) => {
            state.matrix = action.payload
        },
    },
});

export const { setMatrixes } = fifteenSlice.actions;
export default fifteenSlice.reducer;