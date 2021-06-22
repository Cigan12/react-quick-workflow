import * as vscode from 'vscode';
import { capitalize } from '../../../helpers/Capitalize.helper';
import { strToUint8Array } from '../../../helpers/StringToUint8Array.helper';
import { EYesOrNo } from '../CreateReactNativeComponent/CreateReactNativeComponent.types';
import { reactComponentStyledTemplate } from './Templates/ReactComponentStyled.template';
import { simpleReactComponentTemplate } from './Templates/SimpleReactComponent.template';

export const createReactComponent = async (e: any) => {
    const result = await vscode.window.showInputBox({
        placeHolder: 'Print react component name',
    });

    if (result) {
        const componentName = result
            .split('-')
            .map((item) => capitalize(item))
            .join('');

        const requestNeedStyles = await vscode.window.showQuickPick(
            ['No', 'Yes'],
            {
                placeHolder: 'Need styles?',
            }
        );

        const requestUseReactMemo = await vscode.window.showQuickPick(
            ['No', 'Yes'],
            {
                placeHolder: 'Use react memo?',
            }
        );

        vscode.workspace.fs.writeFile(
            vscode.Uri.joinPath(
                vscode.Uri.file(e.path + '/' + result),
                'index.tsx'
            ),
            strToUint8Array(
                simpleReactComponentTemplate(
                    componentName,
                    requestNeedStyles as EYesOrNo,
                    requestUseReactMemo as EYesOrNo
                )
            )
        );

        if ((requestNeedStyles as EYesOrNo) === EYesOrNo.yes) {
            vscode.workspace.fs.writeFile(
                vscode.Uri.joinPath(
                    vscode.Uri.file(e.path + '/' + result),
                    'styled.ts'
                ),
                strToUint8Array(reactComponentStyledTemplate(componentName))
            );
        }
    }
};
