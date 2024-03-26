"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ULConverter = void 0;
class ULConverter {
    convert(text) {
        const items = text
            .split('-')
            .map((item) => item.trim())
            .filter((item) => item.length > 0);
        if (items.length === 0) {
            return '';
        }
        const ulText = items.map((item) => `<li>${item}</li>`).join('');
        return `<ul>${ulText}</ul>`;
    }
}
exports.ULConverter = ULConverter;
