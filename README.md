# Obsidian Note Class Plugin

Some notes should be styled differently than others. This plugin allows you to accomplish this by means of CSS class names that provide hooks for your custom CSS snippets to match against. For example, your vault contained two kinds of notes: (1) excerpts from a primary research source and (2) analysis of those primary sources. So that you don't get the two confused, you want all the source notes to be rendered using a serif typeface, whilst your analysis is rendered in with a sans-serif typeface. How would you do this?

First, install this plugin. Second, in each primary source note, add a `noteClass` to the note's YAML front matter. For example:

```md
---
noteClass: primary-source
---

# Foo Bar Baz
```

Finally, add a custom CSS snippet to look for the `.primary-source` class and style it with a serfi typeface.

```css
.primary-source {
    font-face: serif;
}
```

That's it! Your two types of notes are visually differentiated from each other.

## Development

### Getting Started

-   Clone this repo to `./your-obsidian-vault/.obsidian/plugins/`
-   `yarn` to install dependencies
-   `npm run dev` to start compilation in watch mode.

### Releasing

-   Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
-   Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
-   Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
-   Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments.
-   Publish the release.
-   Use `make release` for convenience

### Manually installing the plugin

-   Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/obsidian-note-class-plugin/`.

### API Documentation

See https://github.com/obsidianmd/obsidian-api
