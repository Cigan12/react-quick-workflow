import * as vscode from 'vscode';
import { capitalize } from '../../../helpers/Capitalize.helper';
import { strToUint8Array } from '../../../helpers/StringToUint8Array.helper';
import { EYesOrNo } from '../../CreateComponent/CreateReactNativeComponent/CreateReactNativeComponent.types';
import { RNStylesTemplate } from '../../Shared/ReactNative/Templates/RNStyles.template';
import { logicTemplate } from '../../Shared/Templates/ReactLogic.template';
import { simpleRNScreenTemplate } from './Templates/SimpleRNScreen.template';

export const createReactNativeScreen = async (e: any) => {
    const requestName = await vscode.window.showInputBox({
        placeHolder: 'Print react native screen name',
    });

    if (requestName) {
        const componentName = capitalize(requestName);
        let requestNeedStyles = await vscode.window.showQuickPick(
            ['No', 'Yes'],
            {
                placeHolder: 'Need styles?',
            }
        );
        let requestNeedLogis = await vscode.window.showQuickPick(
            ['No', 'Yes'],
            {
                placeHolder: 'Need logic?',
            }
        );
        if (!requestNeedStyles) {
            requestNeedStyles = EYesOrNo.no;
        }
        if (!requestNeedLogis) {
            requestNeedLogis = EYesOrNo.no;
        }
        vscode.workspace.fs.writeFile(
            vscode.Uri.joinPath(
                vscode.Uri.file(e.path + '/' + componentName),
                componentName + '.screen.tsx'
            ),
            strToUint8Array(
                simpleRNScreenTemplate(componentName, {
                    styles: requestNeedStyles as EYesOrNo,
                    logic: requestNeedLogis as EYesOrNo,
                })
            )
        );

        if (requestNeedStyles === EYesOrNo.yes) {
            vscode.workspace.fs.writeFile(
                vscode.Uri.joinPath(
                    vscode.Uri.file(e.path + '/' + componentName),
                    componentName + '.styles.ts'
                ),
                strToUint8Array(RNStylesTemplate(componentName))
            );
        }

        if (requestNeedLogis === EYesOrNo.yes) {
            vscode.workspace.fs.writeFile(
                vscode.Uri.joinPath(
                    vscode.Uri.file(e.path + '/' + componentName),
                    componentName + '.logic.tsx'
                ),
                strToUint8Array(logicTemplate(componentName))
            );
        }
    }
};
