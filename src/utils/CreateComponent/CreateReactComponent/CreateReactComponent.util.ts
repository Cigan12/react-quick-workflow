import * as vscode from 'vscode';
import { capitalize } from '../../../helpers/Capitalize.helper';
import { strToUint8Array } from '../../../helpers/StringToUint8Array.helper';
import { simpleReactComponentTemplate } from './Templates/SimpleReactComponent.template';

export const createReactComponent = async (e: any) => {
    const result = await vscode.window.showInputBox({
        placeHolder: 'Print react component name',
    });

    if (result) {
        const componentName = capitalize(result);
        vscode.workspace.fs.writeFile(
            vscode.Uri.joinPath(
                vscode.Uri.file(e.path + '/' + componentName),
                componentName + '.component.tsx'
            ),
            strToUint8Array(simpleReactComponentTemplate(componentName))
        );
    }
};
