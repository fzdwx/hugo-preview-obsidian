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
	}
}
