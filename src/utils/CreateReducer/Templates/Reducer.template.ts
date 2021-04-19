export const reducerTemplate = (
    name: string
) => `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { I${name}State } from './${name}.reducer.types';

const initialState: I${name}State = {};

const ${name}Slice = createSlice({
    name: '${name}',
    initialState,
    reducers: {
        setTest(state, action: PayloadAction<string>) {
            state.test = action.payload;
        },
    },
});

export const ${name}Reducer = ${name}Slice.reducer;
export const { setTest } = ${name}Slice.actions;`;
