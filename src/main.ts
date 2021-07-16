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
        if (!ctx || !ctx.frontmatter || !ctx.frontmatter.noteClass) {
            return;
        }
        elem.classList.add(ctx.frontmatter.noteClass);
    };

    onload() {
        MarkdownPreviewRenderer.registerPostProcessor(this.postprocessor);
    }

    onunload() {
        MarkdownPreviewRenderer.unregisterPostProcessor(this.postprocessor);
    }
}
