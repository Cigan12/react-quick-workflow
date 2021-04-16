import * as vscode from 'vscode';
import { createReactComponent } from './utils/CreateComponent/CreateReactComponent/CreateReactComponent.util';
import { createReactNativeComponent } from './utils/CreateComponent/CreateReactNativeComponent/CreateReactNativeComponent.util';
import { createReactNativeScreen } from './utils/CreatePages/CreateRNScreen/CreateRNScreen.util';
import { createReducer } from './utils/CreateReducer/CreateReducer.util';
import { createSaga } from './utils/CreateSaga/CreateSaga.util';

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

    const reactReducer = vscode.commands.registerCommand(
        'reactquickworkflow.createReducer',
        createReducer
    );

    const reactSaga = vscode.commands.registerCommand(
        'reactquickworkflow.createSaga',
        createSaga
    );

    context.subscriptions.push(reactComponent);
    context.subscriptions.push(reactNativeComponent);
    context.subscriptions.push(reactNativeScreen);
    context.subscriptions.push(reactReducer);
    context.subscriptions.push(reactSaga);

    // TODO: Need to add react component support
    // TODO: Need to add react pages support
    // TODO: Need to add next component support
    // TODO: Need to add next pages support
}

// this method is called when your extension is deactivated
export function deactivate() {}
