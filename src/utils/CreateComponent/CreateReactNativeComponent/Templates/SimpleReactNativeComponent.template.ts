import {
    EYesOrNo,
    ISimpleReactNativeComponentTemplateOptions,
} from '../CreateReactNativeComponent.types';

export const simpleReactNativeComponentTemplate = (
    name: string,
    { styles, logic }: ISimpleReactNativeComponentTemplateOptions
) => `import React from 'react';
${logic === EYesOrNo.yes ? `import { L${name} } from './${name}.logic';` : ''}
import { View } from 'react-native';
${styles === EYesOrNo.yes ? `import { S${name} } from './${name}.styles';` : ''}

interface I${name}ComponentProps {}
export const ${name}Component: React.FC<I${name}ComponentProps> = () => {
        ${logic === EYesOrNo.yes ? `L${name}()` : ''}
        return (
            <View></View>
        )
};`;
