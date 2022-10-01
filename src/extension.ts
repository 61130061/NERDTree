import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, NERDTree is ready on your system.');

	// Focus sidebar 
	context.subscriptions.push(
		vscode.commands.registerCommand('nerdtree.unfocusSidebarOrClose', () => {
			if (vscode.workspace.getConfiguration().get('nerdtree.alwaysShowSidebar')) {
				vscode.commands.executeCommand('workbench.action.focusActiveEditorGroup');
			} else {
				vscode.commands.executeCommand('workbench.action.toggleSidebarVisibility');
			}
		})
	);

	// Close current editor and open selected file instead
	// Release version: 1.1.0
	context.subscriptions.push(
		vscode.commands.registerCommand('nerdtree.openFile', () => {
			vscode.commands.executeCommand('workbench.action.closeActiveEditor');
			vscode.commands.executeCommand('list.select');
			if (vscode.workspace.getConfiguration().get('nerdtree.hideSidebarWhenOpenFile')) {
				vscode.commands.executeCommand('workbench.action.toggleSidebarVisibility');
			}
		})
	);

	// Open file in the new tab
	context.subscriptions.push(
		vscode.commands.registerCommand('nerdtree.openFileNewWindow', () => {
			vscode.commands.executeCommand('explorer.openAndPassFocus');
			if (vscode.workspace.getConfiguration().get('nerdtree.hideSidebarWhenOpenFile')) {
				vscode.commands.executeCommand('workbench.action.toggleSidebarVisibility');
			}
		})
	);
}

export function deactivate() {}
