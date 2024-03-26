export declare class LineConverter {
    private converters;
    constructor();
    addConverter(pattern: RegExp, convertFn: (match: string) => string): void;
    convertTextToHTML(text: string): string;
}
