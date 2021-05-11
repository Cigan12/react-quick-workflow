import * as vscode from 'vscode';
import { capitalize } from '../../helpers/Capitalize.helper';
import { strToUint8Array } from '../../helpers/StringToUint8Array.helper';
import { EYesOrNo } from '../CreateComponent/CreateReactNativeComponent/CreateReactNativeComponent.types';
import {
    apiUtilTemplate,
    apiUtilTypesTemplate,
} from './templates/APIUtil.template';

export const createAPIUtil = async (e: any) => {
    const result = await vscode.window.showInputBox({
        placeHolder: 'Print API util name',
    });

    if (result) {
        const apiUtilName = capitalize(result);
        const folderPath = e.path + '/' + apiUtilName + 'API';
        let requestNeedTypes = await vscode.window.showQuickPick(
            ['No', 'Yes'],
            {
                placeHolder: 'Need types?',
            }
        );
        vscode.workspace.fs.writeFile(
            vscode.Uri.joinPath(
                vscode.Uri.file(folderPath),
                apiUtilName + 'API.util.ts'
            ),
            strToUint8Array(
                apiUtilTemplate(apiUtilName, requestNeedTypes === EYesOrNo.yes)
            )
        );

        if (requestNeedTypes === EYesOrNo.yes) {
            vscode.workspace.fs.writeFile(
                vscode.Uri.joinPath(
                    vscode.Uri.file(folderPath),
                    apiUtilName + 'API.util.types.ts'
                ),
                strToUint8Array(apiUtilTypesTemplate(apiUtilName))
            );
        }
    }
};
