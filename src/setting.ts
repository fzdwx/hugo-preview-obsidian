import {App, PluginSettingTab, Setting} from "obsidian";
import HugoPreview from "./main";

export class HugoPreviewSettingTab extends PluginSettingTab {
	plugin: HugoPreview;

	constructor(app: App, plugin: HugoPreview) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Settings for Hugo preview.'});

		new Setting(containerEl)
			.setName('Port')
			.setDesc('the hugo server port.')
			.addText(text => text
				.setPlaceholder('default: 1313')
				.setValue(this.plugin.settings.port)
				.onChange(async (value) => {
					this.plugin.settings.port = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Hugo command path')
			.setDesc('hugo command path, default: hugo')
			.addText(text => text
				.setPlaceholder('default: hugo')
				.setValue(this.plugin.settings.hugoCommandPath)
				.onChange(async (value) => {
					this.plugin.settings.hugoCommandPath = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Hugo Server Custom flags')
			.setDesc('hugo server custom flags, default: --navigateToChanged')
			.addText(text => text
				.setPlaceholder('--navigateToChanged')
				.setValue(this.plugin.settings.hugoServerFlags)
				.onChange(async (value) => {
					this.plugin.settings.hugoServerFlags = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Command')
			.setDesc('quick shortcut, run your customer command. ${cwd} will replace with current working directory.')
			.addText(text => text
				.setPlaceholder('')
				.setValue(this.plugin.settings.command)
				.onChange(async (value) => {
					this.plugin.settings.command = value;
					await this.plugin.saveSettings();
				}));
	}
}
