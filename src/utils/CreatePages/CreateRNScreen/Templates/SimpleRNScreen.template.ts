import {
    EYesOrNo,
    ISimpleReactNativeComponentTemplateOptions,
} from '../../../CreateComponent/CreateReactNativeComponent/CreateReactNativeComponent.types';
import { ISimpleCreateRNScreenTemplateOptions } from '../CreateRNScreen.types';

export const simpleRNScreenTemplate = (
    name: string,
    { styles, logic, navigation }: ISimpleCreateRNScreenTemplateOptions
) => `import React from 'react';
${
    navigation === EYesOrNo.yes
        ? `import { StackNavigationProp } from '@react-navigation/stack';`
        : ''
}
${logic === EYesOrNo.yes ? `import { L${name} } from './${name}.logic';` : ''}
import { View } from 'react-native';
${styles === EYesOrNo.yes ? `import { S${name} } from './${name}.styles';` : ''}

interface I${name}ScreenProps {
    ${
        navigation === EYesOrNo.yes
            ? `navigation: StackNavigationProp< , '${name}'>;`
            : ''
    }
}
export const ${name}Screen: React.FC<I${name}ScreenProps> = () => {
        ${logic === EYesOrNo.yes ? `L${name}()` : ''}
        return (
            <View></View>
        )
};`;
