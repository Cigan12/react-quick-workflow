import * as vscode from 'vscode';
import { capitalize } from '../../../helpers/Capitalize.helper';
import { strToUint8Array } from '../../../helpers/StringToUint8Array.helper';
import { reactComponentStyledTemplate } from './Templates/ReactComponentStyled.template';
import { simpleReactComponentTemplate } from './Templates/SimpleReactComponent.template';
import { EYesOrNo } from '../../../types/Answers.type';

export const createReactComponent =
    (type: 'view' | 'component') => async (e: any) => {
        const result = await vscode.window.showInputBox({
            placeHolder: 'Print react component name',
        });

        if (result) {
            const componentName = result
                .split('-')
                .map((item) => capitalize(item))
                .join('');

            const requestNeedStyles = await vscode.window.showQuickPick(
                ['Yes', 'No'],
                {
                    placeHolder: 'Need styles?',
                },
            );

            const requestUseReactMemo = await vscode.window.showQuickPick(
                ['No', 'Yes'],
                {
                    placeHolder: 'Use react memo?',
                },
            );

            const requestExportInterface = await vscode.window.showQuickPick(
                ['No', 'Yes'],
                {
                    placeHolder: 'Export props interface?',
                },
            );

            vscode.workspace.fs.writeFile(
                vscode.Uri.joinPath(
                    vscode.Uri.file(e.path + '/' + componentName),
                    `${componentName}.${type}.tsx`,
                ),
                strToUint8Array(
                    simpleReactComponentTemplate(
                        componentName,
                        requestNeedStyles as EYesOrNo,
                        requestUseReactMemo as EYesOrNo,
                        requestExportInterface as EYesOrNo,
                    ),
                ),
            );

            if ((requestNeedStyles as EYesOrNo) === EYesOrNo.yes) {
                vscode.workspace.fs.writeFile(
                    vscode.Uri.joinPath(
                        vscode.Uri.file(e.path + '/' + componentName),
                        `${componentName}.styled.ts`,
                    ),
                    strToUint8Array(
                        reactComponentStyledTemplate(componentName),
                    ),
                );
            }
        }
    };
