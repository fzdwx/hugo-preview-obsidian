/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => HugoPreview
});
module.exports = __toCommonJS(main_exports);
var import_obsidian5 = require("obsidian");

// src/statusbar.ts
var import_obsidian = require("obsidian");
var _Statusbar = class {
  constructor(plugin) {
    this.init = () => {
      (0, import_obsidian.setIcon)(this.statusBarItemEl, "hugo");
      this.plugin.registerDomEvent(this.statusBarItemEl, "click", () => {
        this.plugin.cmd.run();
        this.plugin.hugoPreview();
      });
    };
    this.plugin = plugin;
    this.statusBarItemEl = plugin.addStatusBarItem();
  }
};
var Statusbar = _Statusbar;
Statusbar.create = (plugin) => {
  return new _Statusbar(plugin);
};

// src/setting.ts
var import_obsidian2 = require("obsidian");
var HugoPreviewSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Settings for Hugo preview." });
    new import_obsidian2.Setting(containerEl).setName("Port").setDesc("the hugo server port.").addText((text) => text.setPlaceholder("default: 1313").setValue(this.plugin.settings.port).onChange(async (value) => {
      this.plugin.settings.port = value;
      await this.plugin.saveSettings();
    }));
  }
};

// src/view.ts
var import_obsidian3 = require("obsidian");
var VIEW_TYPE = "hugo-preview-view";
var View;
var _HugoPreviewView = class extends import_obsidian3.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return "Hugo Preview";
  }
  async onOpen() {
    this.contentEl.empty();
    this.contentEl.addClass("hugo-preview-view");
    this.contentEl.appendChild(createFrame("http://localhost:1313"));
  }
  async onClose() {
    this.contentEl.empty();
    this.plugin.clean();
  }
};
var HugoPreviewView = _HugoPreviewView;
HugoPreviewView.load = (plugin) => {
  plugin.registerView(VIEW_TYPE, (leaf) => {
    View = new _HugoPreviewView(leaf, plugin);
    return View;
  });
};
var createFrame = (url) => {
  let frame;
  let style = `padding: 10px;`;
  if (import_obsidian3.Platform.isDesktopApp) {
    frame = document.createElement("webview");
    frame.setAttribute("allowpopups", "");
    frame.addEventListener("dom-ready", () => {
      frame.setZoomFactor(1);
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
};

// src/svg.ts
var hugoSvg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="100px" height="100px" viewBox="-46 0 348 348" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
	<g>
		<path d="M3.68560311,188.164981 C4.18365759,198.424903 14.4435798,193.64358 19.0256809,190.456031 C23.4085603,187.368093 24.7035019,189.957977 25.1019455,183.981323 C25.4007782,179.996887 25.7992218,176.112062 25.6,172.127626 C18.92607,171.529961 11.7540856,173.123735 6.27548638,177.108171 C3.38677043,179.100389 -1.79299611,185.674708 3.68560311,188.164981" fill="#F6D2A2"></path>
		<path d="M208.18677,314.272374 C216.056031,319.153307 230.499611,333.89572 218.645914,341.067704 C207.290272,351.427237 200.915175,329.612451 190.954086,326.624125 C195.237354,320.747082 200.616342,315.368093 208.18677,314.272374 L208.18677,314.272374 L208.18677,314.272374 Z" fill="#F6D2A2"></path>
		<path d="M67.336965,330.907393 C58.0731518,332.301946 52.8933852,340.669261 45.1237354,344.952529 C37.8521401,349.235798 35.063035,343.557977 34.4653696,342.362646 C33.3696498,341.864591 33.4692607,342.8607 31.6762646,341.067704 C24.9027237,330.409339 38.6490272,322.639689 45.8210117,317.360311 C55.7821012,315.368093 62.0575875,324.034241 67.336965,330.907393 L67.336965,330.907393 L67.336965,330.907393 Z" fill="#F6D2A2"></path>
		<path d="M251.915953,186.870039 C251.417899,197.129961 241.157977,192.348638 236.575875,189.161089 C232.192996,186.073152 230.898054,188.663035 230.499611,182.686381 C230.200778,178.701946 229.802335,174.817121 230.001556,170.832685 C236.675486,170.235019 243.847471,171.828794 249.32607,175.81323 C252.115175,177.805447 257.394553,184.379767 251.915953,186.870039" fill="#F6D2A2"></path>
		<path d="M224.722179,61.7587549 C260.283268,49.2077821 232.491829,0.498054475 201.51284,22.0140078 C181.192218,4.58210117 153.201556,1.39455253 123.816342,1.39455253 C95.0287938,3.68560311 67.6357977,8.96498054 48.5105058,25.6996109 C17.6311284,5.77743191 -10.8575875,53.5906615 25.4007782,65.6435798 C15.2404669,105.089494 26.7953307,145.332296 25.2015564,185.475486 C23.707393,221.53463 14.244358,269.845914 34.2661479,302.219455 C51.2996109,329.911284 87.9564202,339.772763 118.138521,340.868482 C156.687938,342.263035 203.405447,332.8 222.132296,295.445914 C240.062257,259.884825 235.081712,215.557977 232.790661,177.207782 C230.499611,138.459144 234.782879,99.1128405 224.722179,61.7587549 L224.722179,61.7587549 Z" fill="#69D7E2"></path>
		<path d="M254.605447,180.793774 C253.609339,178.701946 251.716732,176.311284 249.923735,175.016342 C245.341634,171.729183 239.464591,169.936187 233.388327,169.736965 C233.189105,163.561089 232.989883,156.787549 232.989883,148.221012 L232.989883,140.451362 C232.890272,115.947082 232.59144,105.189105 231.196887,91.7416342 C230.101167,81.1828794 228.407782,71.4210117 226.017121,62.2568093 C234.085603,59.1688716 239.364981,54.088716 241.456809,47.5143969 C243.449027,41.4381323 242.452918,34.5649805 239.066148,28.488716 C235.579767,22.5120623 230.001556,18.029572 223.526848,16.2365759 C216.554086,14.3439689 208.983658,15.7385214 201.712062,20.6194553 C195.237354,15.140856 187.766537,10.9571984 179.399222,7.76964981 C164.557198,2.29105058 147.324514,0.19922179 123.915953,0.19922179 L123.915953,1.19533074 L123.816342,0.19922179 C98.8140078,2.19143969 80.2863813,6.07626459 64.9463035,13.5470817 C58.770428,16.5354086 53.2918288,20.1214008 48.5105058,24.3050584 C41.1392996,19.7229572 33.4692607,18.6272374 26.3968872,20.818677 C19.8225681,22.8108949 14.1447471,27.492607 10.7579767,33.5688716 C7.37120623,39.6451362 6.57431907,46.6178988 8.86536965,52.5945525 C11.1564202,58.5712062 16.4357977,63.2529183 24.3050584,66.1416342 C21.814786,76.2023346 20.5198444,86.8607004 20.3206226,98.614786 C20.1214008,110.070039 20.6194553,119.234241 22.4124514,139.953307 C23.707393,155.392996 24.2054475,162.46537 24.4046693,171.031907 C17.6311284,170.733074 10.8575875,172.52607 5.77743191,176.211673 C3.9844358,177.506615 1.9922179,179.797665 1.09571984,181.989105 C-0.19922179,184.77821 0.298832685,187.268482 2.88871595,188.762646 C3.28715953,193.543969 5.9766537,195.735409 10.0607004,195.336965 C13.0490272,195.038132 16.6350195,193.444358 19.7229572,191.252918 C20.4202335,190.754864 21.1175097,190.35642 21.814786,190.057588 C22.1136187,189.957977 22.3128405,189.858366 22.6116732,189.758755 C22.6116732,189.758755 23.2093385,189.559533 23.4085603,189.459922 C23.707393,189.360311 24.0062257,189.2607 24.2054475,189.061479 C24.0062257,193.743191 23.6077821,198.624125 22.711284,209.780545 C21.7151751,222.331518 21.2171206,229.204669 21.0178988,236.874708 C20.1214008,265.363424 23.5081712,286.08249 33.6684825,302.518288 C36.8560311,307.698054 40.740856,312.280156 45.3229572,316.463813 C44.4264591,317.061479 40.6412451,319.850584 39.4459144,320.747082 C35.2622568,323.93463 32.3735409,326.624125 30.6801556,329.612451 C28.488716,333.497276 28.488716,337.382101 30.9789883,341.466148 L31.0785992,341.565759 L31.1782101,341.66537 C32.27393,342.761089 32.8715953,343.059922 33.6684825,343.059922 L33.7680934,343.059922 L33.9673152,343.059922 L33.9673152,343.059922 C34.0669261,343.259144 34.166537,343.358755 34.2661479,343.557977 C34.5649805,344.056031 34.8638132,344.454475 35.1626459,344.852918 C37.6529183,347.741634 41.1392996,348.438911 45.8210117,345.649805 C48.311284,344.354864 50.1042802,342.8607 53.8894942,339.673152 C53.9891051,339.573541 53.9891051,339.573541 54.088716,339.47393 C60.1649805,334.294163 63.1533074,332.401556 67.6357977,331.70428 L69.229572,331.405447 C69.8272374,331.70428 70.4249027,331.903502 71.122179,332.202335 C85.2669261,337.880156 101.702724,340.968093 118.337743,341.565759 C139.853696,342.362646 160.572763,339.673152 178.10428,333.298054 C182.785992,331.604669 187.168872,329.612451 191.352529,327.421012 C193.942412,328.417121 196.133852,330.508949 200.31751,335.389883 C200.516732,335.589105 200.516732,335.589105 200.616342,335.788327 C200.815564,335.987549 200.815564,336.08716 200.915175,336.18677 C201.114397,336.485603 201.41323,336.684825 201.612451,336.983658 C204.899611,340.868482 207.091051,342.761089 209.581323,343.856809 C212.868482,345.251362 216.056031,344.554086 219.343191,341.565759 C225.120623,337.979767 225.519066,332.401556 221.733852,326.026459 C219.044358,321.543969 214.362646,316.862257 209.979767,313.87393 C215.159533,308.793774 219.642023,302.71751 223.128405,295.844358 C232.691051,276.719066 236.376654,254.406226 236.177432,225.718288 C236.077821,215.557977 235.679377,206.692607 234.583658,189.758755 L234.583658,189.2607 C235.081712,189.459922 235.579767,189.758755 236.077821,190.157198 C239.165759,192.249027 242.751751,193.942412 245.740078,194.241245 C249.824125,194.639689 252.513619,192.448249 252.912062,187.666926 L252.912062,187.666926 C255.402335,186.073152 255.900389,183.582879 254.605447,180.793774 L254.605447,180.793774 Z M222.929183,18.3284047 C228.905837,19.922179 234.085603,24.1058366 237.273152,29.6840467 C240.4607,35.2622568 241.357198,41.5377432 239.564202,47.1159533 C237.671595,52.9929961 232.890272,57.6747082 225.419455,60.4638132 C223.925292,55.0848249 222.132296,49.8054475 220.140078,44.7252918 C223.028794,42.2350195 224.423346,39.1470817 222.132296,34.7642023 C219.841245,30.381323 215.856809,29.8832685 211.772763,31.1782101 C209.182879,27.7914397 206.294163,24.8031128 203.305837,22.0140078 C209.880156,17.8303502 216.653696,16.6350195 222.929183,18.3284047 L222.929183,18.3284047 Z M10.5587549,51.9968872 C8.46692607,46.6178988 9.16420233,40.2428016 12.351751,34.6645914 C15.5392996,29.0863813 20.7190661,24.7035019 26.8949416,22.9105058 C33.2700389,21.0178988 40.1431907,21.9143969 46.9167315,25.8988327 C43.0319066,29.385214 39.5455253,33.3696498 36.5571984,37.7525292 C31.3774319,35.063035 26.0980545,34.5649805 23.1097276,40.0435798 C20.0217899,45.9206226 23.6077821,49.6062257 28.6879377,52.3953307 C27.9906615,54.088716 27.2933852,55.8817121 26.6957198,57.6747082 C25.9984436,59.8661479 25.3011673,62.1571984 24.7035019,64.448249 C17.4319066,61.659144 12.6505837,57.3758755 10.5587549,51.9968872 L10.5587549,51.9968872 Z M22.6116732,187.766537 C22.5120623,187.766537 21.9143969,187.965759 21.9143969,188.06537 C21.6155642,188.164981 21.3167315,188.264591 21.0178988,188.463813 C20.2210117,188.762646 19.4241245,189.2607 18.6272374,189.858366 C15.8381323,191.850584 12.4513619,193.344747 9.8614786,193.543969 C6.87315175,193.842802 5.17976654,192.54786 4.88093385,188.961868 C6.97276265,188.264591 7.8692607,187.766537 8.66614786,186.571206 L7.07237354,185.375875 C6.47470817,186.172763 5.8770428,186.471595 4.08404669,187.069261 L4.08404669,187.069261 C3.9844358,187.069261 3.9844358,187.069261 3.8848249,187.168872 C2.29105058,186.272374 1.9922179,184.877821 2.88871595,182.885603 C3.68560311,181.092607 5.47859922,179.000778 6.97276265,177.905058 C11.7540856,174.418677 18.1291829,172.725292 24.5042802,173.123735 C24.5042802,175.614008 24.6038911,178.10428 24.5042802,180.494942 C24.5042802,180.793774 24.5042802,180.992996 24.4046693,181.291829 C24.3050584,182.686381 24.3050584,183.284047 24.2054475,183.981323 L24.2054475,183.981323 C23.9066148,186.870039 23.707393,187.268482 22.6116732,187.766537 L22.6116732,187.766537 Z M52.6941634,338.079377 C52.5945525,338.178988 52.5945525,338.178988 52.4949416,338.278599 C48.8093385,341.466148 47.0163424,342.761089 44.7252918,344.056031 C40.9400778,346.347082 38.3501946,345.849027 36.5571984,343.657588 C36.2583658,343.358755 36.059144,342.960311 35.8599222,342.661479 C35.7603113,342.561868 35.6607004,342.362646 35.5610895,342.263035 C35.5610895,342.263035 35.5610895,342.263035 35.5610895,342.163424 C35.7603113,340.370428 36.4575875,339.075486 38.2505837,336.286381 C38.3501946,336.18677 38.3501946,336.18677 38.3501946,336.08716 C39.4459144,334.493385 39.9439689,333.596887 40.4420233,332.501167 L38.6490272,331.70428 C38.2505837,332.600778 37.7525292,333.397665 36.7564202,334.99144 C36.6568093,335.091051 36.6568093,335.091051 36.6568093,335.190661 C34.8638132,337.780545 34.0669261,339.374319 33.6684825,341.167315 L33.5688716,341.167315 C33.5688716,341.167315 33.5688716,341.167315 33.4692607,341.167315 L33.2700389,341.167315 C33.0708171,341.067704 32.7719844,340.868482 32.3735409,340.470039 C28.488716,334.294163 31.5766537,329.014786 40.3424125,322.440467 C41.4381323,321.64358 45.1237354,319.053696 46.1198444,318.256809 C46.3190661,318.256809 46.5182879,318.157198 46.7175097,318.057588 C52.0964981,322.639689 58.3719844,326.624125 65.3447471,329.911284 L65.3447471,329.911284 C65.3447471,330.010895 65.444358,330.110506 65.5439689,330.210117 C61.4599222,331.206226 58.2723735,333.298054 52.6941634,338.079377 L52.6941634,338.079377 Z M219.940856,327.22179 C223.028794,332.401556 222.929183,336.585214 219.044358,339.47393 C218.745525,338.876265 218.546304,338.178988 218.14786,337.182879 C218.14786,337.083268 218.14786,337.083268 218.048249,336.983658 C216.653696,333.198444 215.757198,331.604669 214.063813,329.811673 L212.669261,331.206226 C214.163424,332.600778 214.8607,334.094942 216.255253,337.581323 C216.255253,337.680934 216.255253,337.680934 216.354864,337.780545 C216.852918,339.075486 217.151751,339.872374 217.450584,340.56965 C214.8607,342.761089 212.56965,343.159533 210.178988,342.063813 C208.08716,341.167315 206.094942,339.274708 202.907393,335.688716 C202.708171,335.489494 202.508949,335.190661 202.309728,334.891829 C202.210117,334.792218 202.110506,334.692607 202.010895,334.493385 C201.811673,334.294163 201.811673,334.294163 201.712062,334.094942 C198.026459,329.811673 195.835019,327.520623 193.444358,326.225681 C199.022568,323.038132 204.003113,319.45214 208.485603,315.268482 C212.669261,318.35642 217.350973,322.938521 219.940856,327.22179 L219.940856,327.22179 Z M221.335409,294.94786 C212.768872,312.180545 197.628016,324.333074 177.307393,331.70428 C159.975097,337.979767 139.455253,340.56965 118.238132,339.772763 C81.6809339,338.477821 50.0046693,325.727626 35.1626459,301.62179 C25.2015564,285.584436 21.9143969,265.164202 22.8108949,237.07393 C23.1097276,229.403891 23.5081712,222.530739 24.5042802,209.979767 C25.6,195.835019 25.8988327,191.750973 26.1976654,185.375875 C26.3968872,180.793774 26.3968872,176.112062 26.2972763,171.131518 C26.0980545,162.365759 25.6,155.392996 24.3050584,139.754086 C22.5120623,119.035019 22.0140078,109.970428 22.2132296,98.614786 C22.5120623,83.6731518 24.5042802,70.5245136 28.6879377,58.0731518 C35.4614786,37.8521401 47.9128405,24.2054475 65.8428016,15.3400778 C80.8840467,7.9688716 99.1128405,4.18365759 123.915953,2.19143969 C147.125292,2.19143969 164.059144,4.28326848 178.701946,9.66225681 C196.233463,16.136965 209.28249,27.492607 218.247471,44.9245136 C224.024903,59.0692607 227.411673,74.3097276 229.204669,91.8412451 C230.599222,105.189105 230.898054,115.947082 230.997665,140.351751 L230.997665,148.121401 C231.097276,160.174319 231.296498,168.641245 231.794553,177.108171 C231.993774,180.395331 232.093385,181.789883 232.59144,189.659144 C233.68716,206.592996 234.085603,215.358755 234.185214,225.519066 C234.384436,254.107393 230.798444,276.121401 221.335409,294.94786 L221.335409,294.94786 Z M251.816342,185.87393 L251.816342,185.87393 C251.716732,185.87393 251.617121,185.774319 251.51751,185.774319 C249.724514,185.176654 249.126848,184.77821 248.529183,184.080934 L246.935409,185.276265 C247.831907,186.471595 248.728405,186.96965 250.720623,187.666926 C250.322179,191.252918 248.628794,192.54786 245.740078,192.249027 C243.150195,192.049805 239.763424,190.456031 236.974319,188.563424 C236.177432,187.965759 235.380545,187.567315 234.583658,187.168872 C234.484047,187.168872 234.384436,187.069261 234.284825,187.069261 C233.886381,181.590661 233.886381,180.196109 233.68716,177.307393 C233.587549,175.514397 233.487938,173.721401 233.388327,171.928405 C238.966537,172.028016 244.445136,173.721401 248.628794,176.809339 C250.122957,177.905058 251.915953,179.996887 252.71284,181.789883 C253.708949,183.483268 253.509728,184.977432 251.816342,185.87393 L251.816342,185.87393 Z" fill="#000000"></path>
		<g transform="translate(108.934905, 96.951015)">
			<path d="M29.9828794,7.17198444 C30.0824903,12.2521401 31.0785992,17.8303502 30.1821012,23.2093385 C28.7875486,25.7992218 26.1976654,26.0980545 23.9066148,27.0941634 C20.7190661,26.5961089 18.029572,24.5042802 16.7346304,21.5159533 C15.9377432,15.4396887 16.9338521,9.66225681 17.2326848,3.58599222 C17.2326848,3.38677043 21.0178988,3.68560311 24.4046693,4.68171206 C27.2933852,5.57821012 29.9828794,7.07237354 29.9828794,7.17198444 L29.9828794,7.17198444 Z" fill="#FFFFFF"></path>
			<path d="M1.79299611,7.57042802 C-0.996108949,18.1291829 5.47859922,35.3618677 16.136965,21.2171206 C15.3400778,15.2404669 16.2365759,9.46303502 16.5354086,3.58599222 C16.6350195,3.08793774 1.892607,6.87315175 1.79299611,7.57042802 L1.79299611,7.57042802 Z" fill="#FFFFFF"></path>
			<path d="M31.1782101,11.8536965 C30.9789883,8.86536965 30.8793774,7.67003891 30.8793774,6.17587549 L30.8793774,5.47859922 L30.1821012,5.27937743 L17.6311284,1.39455253 L17.6311284,0.697276265 L16.3361868,0.996108949 L16.2365759,0.996108949 L16.2365759,1.09571984 L2.09182879,4.68171206 L1.59377432,4.78132296 L1.39455253,5.27937743 C-0.79688716,10.5587549 -0.298832685,18.5276265 2.49027237,23.4085603 C5.67782101,28.9867704 10.8575875,29.0863813 16.136965,22.711284 C17.6311284,25.6 20.4202335,27.5922179 23.6077821,28.0902724 L23.9066148,28.0902724 L24.2054475,27.9906615 C24.6038911,27.7914397 25.0023346,27.6918288 25.6996109,27.3929961 C25.7992218,27.3929961 25.7992218,27.3929961 25.8988327,27.2933852 C28.7875486,26.2972763 29.9828794,25.5003891 30.9789883,23.6077821 L31.0785992,23.5081712 L31.0785992,23.3089494 C31.3774319,21.5159533 31.4770428,19.6233463 31.4770428,17.5315175 C31.4770428,16.0373541 31.3774319,14.6428016 31.1782101,11.8536965 L31.1782101,11.8536965 Z M15.2404669,8.16809339 C15.140856,9.96108949 15.0412451,10.6583658 14.9416342,11.6544747 C14.7424125,15.3400778 14.7424125,18.1291829 15.0412451,20.9182879 C10.3595331,26.8949416 6.67392996,26.8949416 4.18365759,22.4124514 C1.79299611,18.2287938 1.29494163,11.1564202 3.08793774,6.47470817 L15.6389105,3.28715953 C15.5392996,4.58210117 15.4396887,5.8770428 15.2404669,8.16809339 L15.2404669,8.16809339 Z M29.1859922,22.9105058 C28.488716,24.1058366 27.5922179,24.7035019 25.2015564,25.5003891 C25.1019455,25.5003891 25.1019455,25.5003891 25.0023346,25.6 C24.4046693,25.7992218 24.0062257,25.9984436 23.707393,26.0980545 C21.0178988,25.6 18.7268482,23.8070039 17.6311284,21.3167315 C17.3322957,18.6272374 17.3322957,15.8381323 17.5315175,12.1525292 C17.6311284,11.1564202 17.6311284,10.459144 17.8303502,8.66614786 C18.029572,6.37509728 18.1291829,4.98054475 18.1291829,3.68560311 L28.9867704,6.97276265 C28.9867704,8.26770428 29.0863813,9.46303502 29.2856031,12.0529183 C29.4848249,14.7424125 29.5844358,16.136965 29.5844358,17.7307393 C29.5844358,19.6233463 29.4848249,21.3167315 29.1859922,22.9105058 L29.1859922,22.9105058 Z" fill="#000000"></path>
		</g>
		<g transform="translate(48.475508, 21.975564)">
			<path d="M2.29105058,38.7486381 C11.4552529,74.4093385 68.5322957,65.2451362 66.340856,29.4848249 C63.7509728,-13.3478599 -6.47470817,-5.08015564 2.29105058,38.7486381" fill="#FFFFFF"></path>
			<path d="M67.336965,29.385214 C66.7392996,19.0256809 62.1571984,10.9571984 54.5867704,5.8770428 C47.8132296,1.29494163 38.848249,-0.498054475 29.9828794,0.59766537 C21.1175097,1.79299611 12.9494163,5.77743191 7.57042802,12.0529183 C1.59377432,19.0256809 -0.697276265,28.1898833 1.39455253,38.7486381 L2.29105058,38.5494163 L1.39455253,38.7486381 C10.7579767,75.4054475 69.5284047,66.5400778 67.336965,29.385214 L67.336965,29.385214 Z M3.18754864,38.5494163 C1.19533074,28.488716 3.38677043,19.922179 8.96498054,13.4474708 C14.0451362,7.57042802 21.7151751,3.68560311 30.1821012,2.58988327 C38.6490272,1.49416342 47.1159533,3.18754864 53.4910506,7.57042802 C60.5634241,12.351751 64.8466926,19.8225681 65.444358,29.6840467 C67.5361868,64.448249 12.0529183,72.8155642 3.18754864,38.5494163 L3.18754864,38.5494163 Z" fill="#000000"></path>
			<ellipse fill="#000000" cx="18.029572" cy="32.8715953" rx="9.66225681" ry="10.459144"></ellipse>
			<ellipse fill="#FFFFFF" cx="22.4124514" cy="35.2622568" rx="2.29105058" ry="2.68949416"></ellipse>
		</g>
		<g transform="translate(129.617789, 18.097523)">
			<path d="M1.19533074,35.9595331 C8.26770428,76.8996109 75.2062257,66.0420233 65.5439689,24.8031128 C56.877821,-12.2521401 -1.19533074,-1.9922179 1.19533074,35.9595331" fill="#FFFFFF"></path>
			<path d="M66.4404669,24.6038911 C57.5750973,-13.5470817 -2.19143969,-3.08793774 0.19922179,36.059144 L0.19922179,36.1587549 C3.48638132,55.4832685 20.7190661,65.3447471 39.7447471,62.1571984 C48.4108949,60.663035 56.1805447,56.4793774 61.2607004,50.3035019 C66.8389105,43.4303502 68.8311284,34.5649805 66.4404669,24.6038911 L66.4404669,24.6038911 Z M59.766537,49.1081712 C54.985214,54.8856031 47.7136187,58.8700389 39.4459144,60.2645914 C21.4163424,63.2529183 5.27937743,53.9891051 2.09182879,35.8599222 C-0.0996108949,-0.996108949 56.2801556,-10.8575875 64.6474708,25.0023346 C66.8389105,34.4653696 65.0459144,42.7330739 59.766537,49.1081712 L59.766537,49.1081712 Z" fill="#000000"></path>
			<ellipse fill="#000000" cx="17.6311284" cy="34.166537" rx="9.46303502" ry="10.459144"></ellipse>
			<ellipse fill="#FFFFFF" cx="22.0140078" cy="36.5571984" rx="2.19143969" ry="2.68949416"></ellipse>
		</g>
		<g transform="translate(99.536375, 70.451072)">
			<path d="M13.248249,12.5509728 C5.37898833,13.248249 -0.996108949,22.5120623 3.08793774,29.8832685 C8.46692607,39.6451362 20.5198444,28.9867704 27.9906615,29.9828794 C36.6568093,30.1821012 43.7291829,39.1470817 50.6023346,31.5766537 C58.2723735,23.2093385 47.3151751,15.0412451 38.6490272,11.4552529 L13.248249,12.5509728 L13.248249,12.5509728 Z" fill="#F6D2A2"></path>
			<path d="M51.5984436,19.2249027 C48.9089494,15.8381323 44.2272374,12.7501946 39.1470817,10.6583658 L38.9478599,10.5587549 L38.7486381,10.5587549 L13.248249,11.5548638 C4.38287938,12.351751 -1.9922179,22.6116732 2.29105058,30.381323 C3.9844358,33.3696498 6.27548638,34.8638132 9.36342412,35.063035 C11.6544747,35.1626459 14.0451362,34.6645914 17.7307393,33.3696498 C18.029572,33.2700389 18.4280156,33.170428 18.92607,32.9712062 C23.9066148,31.277821 25.8988327,30.7797665 27.8910506,31.0785992 L27.9906615,31.0785992 C30.381323,31.0785992 32.3735409,31.7758755 36.1587549,33.2700389 C40.3424125,34.9634241 41.6373541,35.4614786 43.7291829,35.6607004 C46.6178988,35.8599222 49.1081712,34.8638132 51.3992218,32.3735409 C55.2840467,28.0902724 55.0848249,23.5081712 51.5984436,19.2249027 L51.5984436,19.2249027 Z M49.9050584,30.9789883 C48.0124514,33.0708171 46.1198444,33.7680934 43.8287938,33.6684825 C42.0357977,33.5688716 40.8404669,33.0708171 36.8560311,31.4770428 C32.8715953,29.7836576 30.6801556,29.1859922 28.0902724,29.0863813 C25.6,28.7875486 23.5081712,29.2856031 18.2287938,31.0785992 C17.7307393,31.277821 17.3322957,31.3774319 17.033463,31.4770428 C9.7618677,33.9673152 6.27548638,33.7680934 3.8848249,29.385214 C0.298832685,22.9105058 5.77743191,14.1447471 13.248249,13.4474708 L38.4498054,12.4513619 C43.2311284,14.4435798 47.5143969,17.3322957 50.0046693,20.4202335 C52.9929961,24.0062257 53.092607,27.5922179 49.9050584,30.9789883 L49.9050584,30.9789883 Z" fill="#231F20"></path>
			<g transform="translate(11.953307, 0.000000)" fill="#000000">
				<path d="M28.6879377,8.26770428 C25.6,-3.08793774 -0.298832685,-1.39455253 0.298832685,12.1525292 C1.59377432,22.2132296 31.6762646,19.5237354 28.6879377,8.26770428 L28.6879377,8.26770428 Z"></path>
			</g>
		</g>
	</g>
</svg>
`;

// src/cmd.ts
var import_child_process = require("child_process");
var import_obsidian4 = require("obsidian");
var _Cmd = class {
  constructor(plugin) {
    this.run = async () => {
      if (this.running) {
        return;
      }
      let adapter = this.plugin.app.vault.adapter;
      let cwd;
      if (adapter instanceof import_obsidian4.FileSystemAdapter) {
        cwd = adapter.getBasePath();
      } else {
        new import_obsidian4.Notice("Not a FileSystemAdapter, hugo server will not work.");
        return;
      }
      const { settings } = this.plugin;
      (0, import_child_process.exec)(`hugo server -D -p ${settings.port}`, {
        signal: this.controller.signal,
        cwd
      }, (error, stdout, stderr) => {
        if (error) {
          new import_obsidian4.Notice(`hugo exec error: ${error.message}`);
          return;
        }
        this.running = true;
      });
    };
    this.stop = async () => {
      if (!this.running) {
        return;
      }
      new import_obsidian4.Notice("hugo server stopped");
      this.controller.abort();
      this.running = false;
    };
    this.plugin = plugin;
    this.controller = new AbortController();
  }
};
var Cmd = _Cmd;
Cmd.create = (plugin) => {
  return new _Cmd(plugin);
};

// src/main.ts
var DEFAULT_SETTINGS = {
  port: "1313"
};
var HugoPreview = class extends import_obsidian5.Plugin {
  constructor() {
    super(...arguments);
    this.clean = () => {
      this.app.workspace.detachLeavesOfType(VIEW_TYPE);
      this.cmd.stop();
    };
  }
  async onload() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE);
    await this.loadSettings();
    HugoPreviewView.load(this);
    this.cmd = Cmd.create(this);
    this.statusbar = Statusbar.create(this);
    this.statusbar.init();
    this.addSettingTab(new HugoPreviewSettingTab(this.app, this));
  }
  onunload() {
    this.clean();
  }
  unload() {
    this.clean();
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    (0, import_obsidian5.addIcon)("hugo", hugoSvg);
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async hugoPreview() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE);
    await this.app.workspace.getRightLeaf(false).setViewState({
      type: VIEW_TYPE,
      active: true
    });
    this.app.workspace.revealLeaf(
      this.app.workspace.getLeavesOfType(VIEW_TYPE)[0]
    );
  }
};
