import HugoPreview from "./main";
import {setIcon} from "obsidian";

export class Statusbar {
	private readonly statusBarItemEl: HTMLElement;
	private plugin: HugoPreview;

	constructor(plugin: HugoPreview) {
		this.plugin = plugin;
		this.statusBarItemEl = plugin.addStatusBarItem()
	}

	/**
	 * create status bar
	 * @param plugin
	 */
	public static create = (plugin: HugoPreview) => {
		return new Statusbar(plugin);
	}

	/**
	 * init status bar
	 */
	public init = () => {
		setIcon(this.statusBarItemEl, 'hugo')
		this.plugin.registerDomEvent(this.statusBarItemEl, 'click', () => {
			this.plugin.cmd.run()
			this.plugin.hugoPreview();
		})
	}
}
