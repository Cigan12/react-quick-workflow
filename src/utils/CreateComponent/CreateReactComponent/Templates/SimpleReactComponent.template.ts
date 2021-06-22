import { EYesOrNo } from '../../CreateReactNativeComponent/CreateReactNativeComponent.types';

export const simpleReactComponentTemplate = (
    name: string,
    styled: EYesOrNo,
    reactMemo: EYesOrNo
) => `import React from 'react';
${styled === EYesOrNo.yes ? `import { Styled${name} } from './styled.ts'` : ''}

interface IProps {}
${
    reactMemo === EYesOrNo.yes
        ? `
export const ${name} = React.memo<IProps>(() => {
    return (
        ${
            styled === EYesOrNo.yes
                ? `<Styled${name}></Styled${name}>`
                : `<div></div>`
        }
    )
});`
        : `export const ${name}: React.FC<IProps> = () => {
        return (
            ${
                styled === EYesOrNo.yes
                    ? `<Styled${name}></Styled${name}>`
                    : `<div></div>`
            }
        )
};`
}`;
