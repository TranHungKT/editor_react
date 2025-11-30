// TypeScript users only add this code
import { BaseEditor, Descendant } from 'slate';
import { ReactEditor } from 'slate-react';

export type BlockParagraphElement = {
  type: 'paragraph';
  children: CustomText[];
};

export type BlockH1Element = {
  type: 'H1';
  children: Descendant[];
};
export type BlockH2Element = {
  type: 'H2';
  children: Descendant[];
};
export type BlockH3Element = {
  type: 'H3';
  children: Descendant[];
};
export type BlockH4Element = {
  type: 'H4';
  children: Descendant[];
};
export type BlockH5Element = {
  type: 'H5';
  children: Descendant[];
};
export type BlockH6Element = {
  type: 'H6';
  children: Descendant[];
};

export type BlockQuoteElement = {
  type: 'block-quote';
  children: Descendant[];
};

export type CustomElement =
  | BlockParagraphElement
  | BlockH1Element
  | BlockH2Element
  | BlockH3Element
  | BlockH4Element
  | BlockH5Element
  | BlockH6Element
  | BlockQuoteElement;
export type CustomElementType = CustomElement['type'];

export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikeThrough?: boolean;
};
export type CustomEditor = BaseEditor & ReactEditor;
export type CustomTextKey = keyof Omit<CustomText, 'text'>;

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
