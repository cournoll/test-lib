/// <reference types="react" />
/** Interface to describe TypescriptComponent props */
export interface TypescriptComponentProps {
    /** A text to show */
    text: string;
    /** Change the border to red */
    highlight?: boolean;
}
/**
 * Component to test the library
 */
export declare function TypescriptComponent({ text, highlight, }: TypescriptComponentProps): JSX.Element;
