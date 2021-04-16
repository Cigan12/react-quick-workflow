import {
    EYesOrNo,
    ISimpleReactNativeComponentTemplateOptions,
} from '../CreateReactNativeComponent.types';

export const simpleReactNativeComponentTemplate = (
    name: string,
    { styles }: ISimpleReactNativeComponentTemplateOptions
) => `import React from 'react';
import { View } from 'react-native';
${styles === EYesOrNo.yes ? `import { S${name} } from './${name}.styles';` : ''}

interface I${name}ComponentProps {}
export const ${name}Component: React.FC<I${name}ComponentProps> = () => {
        return (
            <View></View>
        )
};`;
