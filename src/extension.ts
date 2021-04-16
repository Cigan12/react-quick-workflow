import * as vscode from 'vscode';
import { createReactComponent } from './utils/CreateComponent/CreateReactComponent/CreateReactComponent.util';
import { createReactNativeComponent } from './utils/CreateComponent/CreateReactNativeComponent/CreateReactNativeComponent.util';

export function activate(context: vscode.ExtensionContext) {
    console.log('React quick workflow is active');

    const reactComponent = vscode.commands.registerCommand(
        'reactquickworkflow.createReactComponent',
        createReactComponent
    );

    const reactNativeComponent = vscode.commands.registerCommand(
        'reactquickworkflow.createReactNativeComponent',
        createReactNativeComponent
    );

    context.subscriptions.push(reactComponent);
    context.subscriptions.push(reactNativeComponent);
}

// this method is called when your extension is deactivated
export function deactivate() {}
