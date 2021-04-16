import * as vscode from 'vscode';
import { createReactComponent } from './utils/CreateComponent/CreateReactComponent/CreateReactComponent.util';
import { createReactNativeComponent } from './utils/CreateComponent/CreateReactNativeComponent/CreateReactNativeComponent.util';
import { createReactNativeScreen } from './utils/CreatePages/CreateRNScreen/CreateRNScreen.util';

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

    const reactNativeScreen = vscode.commands.registerCommand(
        'reactquickworkflow.createReactNativeScreen',
        createReactNativeScreen
    );

    context.subscriptions.push(reactComponent);
    context.subscriptions.push(reactNativeComponent);
    context.subscriptions.push(reactNativeScreen);
}

// this method is called when your extension is deactivated
export function deactivate() {}
