import * as vscode from 'vscode';
import { createReactComponent } from './utils/CreateComponent/CreateReactComponent/CreateReactComponent.util';

export function activate(context: vscode.ExtensionContext) {
    console.log('React boiler helper is active');

    let disposable = vscode.commands.registerCommand(
        'reactboilerhelper.createReactComponent',
        createReactComponent
    );

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
