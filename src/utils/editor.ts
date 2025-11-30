import { CustomEditor, CustomElementType, CustomTextKey } from '@model/types';
import { Editor, Element as SlateElement } from 'slate';

export const isMarkActive = (editor: CustomEditor, format: CustomTextKey) => {
  const marks = editor.getMarks();
  return marks ? marks[format] === true : false;
};

export const isBlockActive = (
  editor: CustomEditor,
  type: CustomElementType,
) => {
  const { selection } = editor;
  if (!selection) {
    return false;
  }

  const [match] = Array.from(
    editor.nodes({
      at: editor.unhangRange(selection),
      match: (n) => {
        if (!Editor.isEditor(n) && SlateElement.isElement(n)) {
          return n.type === type;
        }
        return false;
      },
    }),
  );

  return !!match;
};
