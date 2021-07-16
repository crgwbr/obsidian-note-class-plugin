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
        const noteClass = ctx.frontmatter.noteClass;
        if (noteClass) {
            elem.classList.add(noteClass);
        }
    };

    onload() {
        MarkdownPreviewRenderer.registerPostProcessor(this.postprocessor);
    }

    onunload() {
        MarkdownPreviewRenderer.unregisterPostProcessor(this.postprocessor);
    }
}
