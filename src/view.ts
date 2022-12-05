import {ItemView, Platform, WorkspaceLeaf} from "obsidian";
import HugoPreview from "./main";

export const VIEW_TYPE = "hugo-preview-view";

export let View: HugoPreviewView;

export class HugoPreviewView extends ItemView {
	private plugin: HugoPreview;

	constructor(leaf: WorkspaceLeaf, plugin: HugoPreview) {
		super(leaf);
		this.plugin = plugin;
	}

	public static load = (plugin: HugoPreview) => {
		plugin.registerView(VIEW_TYPE, (leaf: WorkspaceLeaf) => {
			View = new HugoPreviewView(leaf, plugin);
			return View;
		});
	}

	getViewType() {
		return VIEW_TYPE;
	}

	getDisplayText() {
		return "Hugo Preview";
	}

	async onOpen() {
		const container = this.containerEl.children[1];
		container.empty();
		container.addClass("hugo-preview-view");
		container.appendChild(createFrame("http://localhost:1313"));
	}

	async onClose() {
		this.plugin.clean();
	}
}

// Create an iframe to display the Hugo site
// inspired by https://github.com/Ellpeck/ObsidianCustomFrames/blob/master/src/frame.ts
// MIT License
const createFrame = (url: string) => {
	let frame: HTMLIFrameElement | any;
	let style = `padding: 10px;`;
	if (Platform.isDesktopApp) {
		frame = document.createElement("webview");
		frame.setAttribute("allowpopups", "");
		frame.addEventListener("dom-ready", () => {
			frame.setZoomFactor(1);
			// frame.insertCSS(this.data.customCss);
		});
	} else {
		frame = document.createElement("iframe");
		frame.setAttribute("sandbox", "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation");
		frame.setAttribute("allow", "encrypted-media; fullscreen; oversized-images; picture-in-picture; sync-xhr; geolocation;");
		style += `transform: scale(1); transform-origin: 0 0;`;
	}
	frame.addClass("hugo-preview-frame");
	frame.addClass(`custom-frames-hugo-preview-view`);
	frame.setAttribute("style", style);

	frame.setAttribute("src", url);

	return frame;
}
