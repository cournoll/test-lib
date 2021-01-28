/// <reference types="react" />
declare type TypescriptComponentProps = {
    text: string;
    highlight?: boolean;
};
/**
 * Component to test the library
 * @param {string} text A text to show
 * @param {boolean} highlight Change the border to red
 * @example <TypescriptComponent text="my text" />
 */
export declare function TypescriptComponent({ text, highlight }: TypescriptComponentProps): JSX.Element;
export {};
