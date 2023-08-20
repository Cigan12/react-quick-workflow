import { EYesOrNo } from '../../../../types/Answers.type';

export const simpleReactComponentTemplate = (
    name: string,
    styled: EYesOrNo,
    reactMemo: EYesOrNo,
    exportInterface: EYesOrNo,
) => {
    const interfaceName =
        exportInterface === EYesOrNo.yes ? `I${name}Props` : 'IProps';
    return `import React from 'react';
${
    styled === EYesOrNo.yes
        ? `import { S${name} } from './${name}.styled.ts'`
        : ''
}

${exportInterface === EYesOrNo.yes ? 'export ' : ''}interface ${interfaceName} {
    className?: string;
}

${
    reactMemo === EYesOrNo.yes
        ? `
export const ${name} = React.memo<${interfaceName}>(() => {
    return (
        ${styled === EYesOrNo.yes ? `<S${name}></S${name}>` : `<div></div>`}
    )
});`
        : `export const ${name}: React.FC<${interfaceName}> = () => {
        return (
            ${styled === EYesOrNo.yes ? `<S${name}></S${name}>` : `<div></div>`}
        )
};`
}`;
};
