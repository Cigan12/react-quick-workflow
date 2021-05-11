import * as vscode from 'vscode';
import { capitalize } from '../../helpers/Capitalize.helper';
import { strToUint8Array } from '../../helpers/StringToUint8Array.helper';
import { reducerTemplate } from './Templates/Reducer.template';
import { reducerTypesTemplate } from './Templates/ReducerTypes.template';

export const createReducer = async (e: any) => {
    const result = await vscode.window.showInputBox({
        placeHolder: 'Print reducer name',
    });

    if (result) {
        const reducerName = capitalize(result);
        vscode.workspace.fs.writeFile(
            vscode.Uri.joinPath(
                vscode.Uri.file(e.path + '/' + reducerName),
                reducerName + '.reducer.ts'
            ),
            strToUint8Array(reducerTemplate(reducerName))
        );
        vscode.workspace.fs.writeFile(
            vscode.Uri.joinPath(
                vscode.Uri.file(e.path + '/' + reducerName),
                reducerName + '.reducer.types.ts'
            ),
            strToUint8Array(reducerTypesTemplate(reducerName))
        );
    }
};
