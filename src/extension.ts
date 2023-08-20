import * as vscode from 'vscode';
import { createReactComponent } from './utils/CreateComponent/CreateReactComponent/CreateReactComponent.util';

export function activate(context: vscode.ExtensionContext) {
    const reactComponent = vscode.commands.registerCommand(
        'reactquickworkflow.createReactComponent',
        createReactComponent('component')
    );

    const reactView = vscode.commands.registerCommand(
        'reactquickworkflow.createReactComponent',
        createReactComponent('view')
    );

    context.subscriptions.push(reactComponent);
    context.subscriptions.push(reactView);
}

// this method is called when your extension is deactivated
export function deactivate() {}
