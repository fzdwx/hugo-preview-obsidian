import HugoPreview from "./main";
import {exec} from "child_process";
import {FileSystemAdapter, Notice, Platform} from "obsidian";

export class Cmd {
	private running: boolean;

	constructor(plugin: HugoPreview) {
		this.plugin = plugin;
		this.controller = new AbortController();
	}

	private readonly controller: AbortController;

	private readonly plugin: HugoPreview;

	public static create = (plugin: HugoPreview) => {
		return new Cmd(plugin);
	}

	run = async () => {
		if (this.running) {
			return
		}

		let adapter = this.plugin.app.vault.adapter;
		let cwd;
		if (adapter instanceof FileSystemAdapter) {
			cwd = adapter.getBasePath();
		} else {
			new Notice("Not a FileSystemAdapter, hugo server will not work.");
			return
		}

		const {settings} = this.plugin;
		exec(`hugo server -D -p ${settings.port}`, {
			signal: this.controller.signal,
			cwd: cwd,
		}, (error, stdout, stderr) => {
			if (error) {
				new Notice(`hugo exec error: ${error.message}`);
				return;
			}
			this.running = true
		});
	}

	stop = async () => {
		if (!this.running) {
			return
		}

		new Notice("hugo server stopped");
		this.controller.abort();
		this.running = false
	}

}
