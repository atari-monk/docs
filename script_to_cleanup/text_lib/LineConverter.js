"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineConverter = void 0;
class LineConverter {
    constructor() {
        this.converters = [];
    }
    addConverter(pattern, convertFn) {
        this.converters.push({
            pattern,
            convert: convertFn,
        });
    }
    convertTextToHTML(text) {
        const lines = text.split("\n");
        let html = "";
        lines.forEach((line) => {
            let convertedLine = null;
            for (const converter of this.converters) {
                const match = line.match(converter.pattern);
                if (match) {
                    convertedLine = converter.convert(match[1]);
                    break;
                }
            }
            if (convertedLine) {
                html += convertedLine;
            }
            else {
                html += `<p>${line}</p>`;
            }
        });
        return html;
    }
}
exports.LineConverter = LineConverter;
