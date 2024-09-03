# Hugo preview in obsidian

hugo preview in obsidian.

## Features

- [x] Open a `custome iframe` to preview hugo (via https://github.com/Ellpeck/ObsidianCustomFrames)
- [x] Start `hugo server` in the background
	- There is still a bit of a problem currently, the child process (hugo process) does not close when the program
	  launches.
    - Support add custom flags for `hugo server`, default is `--navigateToChanged`
- [x] A customer command setting, default is `Alt+F12`, you can think of it as a shortcut to execute a command,
  I set it to start the terminal `wezterm start --class float --cwd ${cwd}`.


## Usage

Click on the gopher icon on the status bar

![image](https://user-images.githubusercontent.com/65269574/211792531-e10b9d69-f109-4f75-aff6-1a8c132f8b40.png)

## Screenshot

![Record_select-area_20230111192058](https://user-images.githubusercontent.com/65269574/211794013-eab76237-433d-4b9f-bc22-0bb0e4c1fe28.gif)


## Resource

1. [CHANGELOG.md](CHANGELOG.md)
