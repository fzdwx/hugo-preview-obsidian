#!/usr/bin/env just --justfile
install:
	npm run build
	mkdir -p ~/IdeaProjects/fzdwx.github.io/.obsidian/plugins/hugo-preview-obsidian
	cp main.js ~/IdeaProjects/fzdwx.github.io/.obsidian/plugins/hugo-preview-obsidian/main.js
	cp manifest.json ~/IdeaProjects/fzdwx.github.io/.obsidian/plugins/hugo-preview-obsidian/manifest.json
	cp styles.css ~/IdeaProjects/fzdwx.github.io/.obsidian/plugins/hugo-preview-obsidian/styles.css
