import { CustomEditor, CustomTextKey } from '@model/types';

export const isMarkActive = (editor: CustomEditor, format: CustomTextKey) => {
  const marks = editor.getMarks();
  return marks ? marks[format] === true : false;
};
