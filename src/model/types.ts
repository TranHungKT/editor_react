// TypeScript users only add this code
import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export type CustomElement = { type: 'paragraph'; children: CustomText[] };
export type CustomText = { text: string; bold?: boolean; italic?: boolean };
export type CustomEditor = BaseEditor & ReactEditor;
export type CustomTextKey = keyof Omit<CustomText, 'text'>;

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
