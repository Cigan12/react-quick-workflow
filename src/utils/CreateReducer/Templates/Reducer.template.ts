export const reducerTemplate = (
    name: string
) => `import { I${name}State, T${name}Actions } from './${name}.reducer.types';

const initial${name}State: I${name}State = {};

export const ${name}Reducer = (
    state = initial${name}State,
    action: T${name}Actions
): I${name}State => {
    switch (action.type) {
        default:
            return state;
    }
};`;
