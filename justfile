#!/usr/bin/env just --justfile
install:
	npm run build
	mkdir -p ./MyFreshWebsite/.obsidian/plugins/hugo-preview-obsidian
	cp main.js ./MyFreshWebsite/.obsidian/plugins/hugo-preview-obsidian/main.js
	cp manifest.json ./MyFreshWebsite/.obsidian/plugins/hugo-preview-obsidian/manifest.json
	cp styles.css ./MyFreshWebsite/.obsidian/plugins/hugo-preview-obsidian/styles.css
