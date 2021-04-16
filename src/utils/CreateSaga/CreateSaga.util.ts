import * as vscode from 'vscode';
import { capitalize } from '../../helpers/Capitalize.helper';
import { strToUint8Array } from '../../helpers/StringToUint8Array.helper';
import { EYesOrNo } from '../CreateComponent/CreateReactNativeComponent/CreateReactNativeComponent.types';
import { sagaTemplate } from './Templates/Saga.template';

export const createSaga = async (e: any) => {
    const result = await vscode.window.showInputBox({
        placeHolder: 'Print reducer name',
    });

    if (result) {
        const reducerName = capitalize(result);
        let requestNeedTypes = await vscode.window.showQuickPick(
            ['No', 'Yes'],
            {
                placeHolder: 'Need types?',
            }
        );
        vscode.workspace.fs.writeFile(
            vscode.Uri.joinPath(
                vscode.Uri.file(e.path + '/' + reducerName),
                reducerName + '.saga.tsx'
            ),
            strToUint8Array(sagaTemplate(reducerName))
        );

        if (requestNeedTypes === EYesOrNo.yes) {
            vscode.workspace.fs.writeFile(
                vscode.Uri.joinPath(
                    vscode.Uri.file(e.path + '/' + reducerName),
                    reducerName + '.saga.types.tsx'
                ),
                strToUint8Array('')
            );
        }
    }
};
