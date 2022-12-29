import {
	addIcon,
	App,
	Editor,
	FileSystemAdapter,
	MarkdownView,
	Modal,
	Notice,
	Plugin,
	PluginSettingTab,
	Setting
} from 'obsidian';
import {Statusbar} from "./statusbar";
import {HugoPreviewSettingTab} from "./setting";
import {HugoPreviewView, VIEW_TYPE} from "./view";
import {hugoSvg} from "./svg";
import {Cmd} from "./cmd";
import {exec} from "child_process";

interface Settings {
	port: string;
	command: string;
}

const DEFAULT_SETTINGS: Settings = {
	port: '1313',
	command: ""
}

export default class HugoPreview extends Plugin {
	settings: Settings;
	statusbar: Statusbar;
	cmd: Cmd

	async onload() {
		await this.loadSettings();

		// hugo preview view
		HugoPreviewView.load(this);

		// init hugo cmd
		this.cmd = Cmd.create(this)

		// status bar init
		this.statusbar = Statusbar.create(this);
		this.statusbar.init();

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new HugoPreviewSettingTab(this.app, this));

		this.addCommand({
			id: "run-command",
			name: "run command",
			hotkeys: [
				{modifiers: ["Alt"], key: "F12"}
			],
			callback: () => {
				exec(this.settings.command.replace("${cwd}", this.cwd()), (error, stdout, stderr) => {
					if (error) {
						new Notice(`run command error: ${error.message}`);
						return;
					}
				});
			},
		})

		this.registerEvent(this.app.workspace.on('quit', () => {
			this.cmd.controller.abort()
			new Notice("hugo preview quit");
		}));
	}

	onunload() {
		this.clean();
	}

	unload() {
		this.clean();
	}

	clean = () => {
		this.app.workspace.detachLeavesOfType(VIEW_TYPE);
		this.cmd.stop();
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
		addIcon("hugo", hugoSvg);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	async hugoPreview() {
		this.app.workspace.detachLeavesOfType(VIEW_TYPE);
		await this.app.workspace.getRightLeaf(false).setViewState({
			type: VIEW_TYPE,
			active: true,
		});

		this.app.workspace.revealLeaf(
			this.app.workspace.getLeavesOfType(VIEW_TYPE)[0]
		);
	}

	cwd = () => {
		let adapter = this.app.vault.adapter;
		if (adapter instanceof FileSystemAdapter) {
			return adapter.getBasePath();
		} else {
			return ""
		}
	}
}


/*
// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'open-sample-modal-simple',
			name: 'Open sample modal (simple)',
			callback: () => {
				new SampleModal(this.app).open();
			}
		});
		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: 'sample-editor-command',
			name: 'Sample editor command',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				console.log(editor.getSelection());
				editor.replaceSelection('Sample Editor Command');
			}
		});
		// This adds a complex command that can check whether the current state of the app allows execution of the command
		this.addCommand({
			id: 'open-sample-modal-complex',
			name: 'Open sample modal (complex)',
			checkCallback: (checking: boolean) => {
				// Conditions to check
				const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (markdownView) {
					// If checking is true, we're simply "checking" if the command can be run.
					// If checking is false, then we want to actually perform the operation.
					if (!checking) {
						new SampleModal(this.app).open();
					}

					// This command will only show up in Command Palette when the check function returns true
					return true;
				}
			}
		});

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
* */
