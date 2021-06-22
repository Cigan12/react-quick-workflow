import { EYesOrNo } from '../../CreateReactNativeComponent/CreateReactNativeComponent.types';

export const simpleReactComponentTemplate = (
    name: string,
    styled: EYesOrNo,
    reactMemo: EYesOrNo
) => `import React from 'react';
${styled === EYesOrNo.yes ? `import { ${name}SC } from './styled.ts'` : ''}

interface IProps {}
${
    reactMemo === EYesOrNo.yes
        ? `
export const ${name} = React.memo<IProps>(() => {
    return (
        ${styled === EYesOrNo.yes ? `<${name}SC></${name}SC>` : `<div></div>`}
    )
});`
        : `export const ${name}: React.FC<IProps> = () => {
        return (
            ${
                styled === EYesOrNo.yes
                    ? `<${name}SC></${name}SC>`
                    : `<div></div>`
            }
        )
};`
}`;
