export const apiUtilTemplate = (
    name: string,
    types?: boolean
) => `import { AxiosResponse } from 'axios';
${
    types
        ? `import { IAPIGet${name}Response } from './${name}API.util.types';`
        : ''
}

export const APIGet${name} = async () => {
    const r: AxiosResponse<${
        types ? `IAPIGet${name}Response` : '{}'
    }> = API.get('');
    return r.data;
}`;

export const apiUtilTypesTemplate = (name: string) =>
    `export interface IAPIGet${name}Response {}`;
