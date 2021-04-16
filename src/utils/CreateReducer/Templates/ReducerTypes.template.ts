export const reducerTypesTemplate = (
    name: string
) => `export interface I${name}State {
}

export type T${name}Actions = any;`;
