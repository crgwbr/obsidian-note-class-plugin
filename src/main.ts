import {
    Plugin,
    MarkdownPreviewRenderer,
    MarkdownPostProcessor,
    MarkdownPostProcessorContext,
} from "obsidian";

export default class IconsPlugin extends Plugin {
    public postprocessor: MarkdownPostProcessor = (
        elem: HTMLElement,
        ctx: MarkdownPostProcessorContext,
    ) => {
        // Add front matter class name to element
        if (ctx && ctx.frontmatter && ctx.frontmatter.noteClass) {
            elem.classList.add(ctx.frontmatter.noteClass);
        }
        // Add source path as data attr
        if (ctx.sourcePath) {
            elem.dataset.sourcePath = ctx.sourcePath;
        }
    };

    onload() {
        MarkdownPreviewRenderer.registerPostProcessor(this.postprocessor);
    }

    onunload() {
        MarkdownPreviewRenderer.unregisterPostProcessor(this.postprocessor);
    }
}
