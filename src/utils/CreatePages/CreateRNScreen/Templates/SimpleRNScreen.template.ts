import {
    EYesOrNo,
    ISimpleReactNativeComponentTemplateOptions,
} from '../../../CreateComponent/CreateReactNativeComponent/CreateReactNativeComponent.types';

export const simpleRNScreenTemplate = (
    name: string,
    { styles }: ISimpleReactNativeComponentTemplateOptions
) => `import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';
${styles === EYesOrNo.yes ? `import { S${name} } from './${name}.styles';` : ''}

interface I${name}ScreenProps {
    navigation: StackNavigationProp< , '${name}'>;
}
export const ${name}Screen: React.FC<I${name}ScreenProps> = () => {
        return (
            <View></View>
        )
};`;
