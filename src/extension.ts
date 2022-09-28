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

	// Focus fille explorer view
	context.subscriptions.push(
		vscode.commands.registerCommand('nerdtree.focusFileView', () => {
			vscode.commands.executeCommand('workbench.files.action.focusFilesExplorer');
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

	// Create new file
	context.subscriptions.push(
		vscode.commands.registerCommand('nerdtree.createFile', () => {
			vscode.commands.executeCommand('workbench.files.action.createFileFromExplorer');
		})
	);

	// Create new folder
	context.subscriptions.push(
		vscode.commands.registerCommand('nerdtree.createFolder', () => {
			vscode.commands.executeCommand('workbench.files.action.createFolderFromExplorer');
		})
	);

	// Move focused file to trash 
	context.subscriptions.push(
		vscode.commands.registerCommand('nerdtree.moveFileToTrash', () => {
			vscode.commands.executeCommand('moveFileToTrash');
		})
	);

	// Copy focused file 
	context.subscriptions.push(
		vscode.commands.registerCommand('nerdtree.copyFile', () => {
			vscode.commands.executeCommand('filesExplorer.copy');
		})
	);

	// Paste focused file 
	context.subscriptions.push(
		vscode.commands.registerCommand('nerdtree.pasteFile', () => {
			vscode.commands.executeCommand('filesExplorer.paste');
		})
	);

	// Paste focused file 
	context.subscriptions.push(
		vscode.commands.registerCommand('nerdtree.renameFile', () => {
			vscode.commands.executeCommand('renameFile');
		})
	);
}

export function deactivate() {}
