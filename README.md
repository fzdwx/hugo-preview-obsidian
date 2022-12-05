# Hugo preview in obsidian

hugo preview int obsidian.

## Features

- [x] Open a `custome iframe` to preview hugo (via https://github.com/Ellpeck/ObsidianCustomFrames)
- [x] Start `hugo server` in the background
	- There is still a bit of a problem currently, the child process (hugo process) does not close when the program
	  launches.
- [x] A customer command setting, default is `Alt+F12`, you can think of it as a shortcut to execute a command,
  I set it to start the terminal `wezterm start --class float --cwd ${cwd}`.

## Install

```shell
git clone https://github.com/fzdwx/hugo-preview-obsidian /path/to/.obsidian/plugins/
```

## Use

Click on the gopher icon on the status bar

![img.png](img.png)

## Resource

1. [CHANGELOG.md](CHANGELOG.md)
