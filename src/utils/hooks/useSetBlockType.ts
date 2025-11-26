import { CustomElementType } from '@model/types';
import { Transforms } from 'slate';
import { isBlockActive } from 'utils/editor';

interface UseSetBlockTypeProps {
  type: CustomElementType;
  editor: any;
}
export default function useSetBlockType({
  type,
  editor,
}: UseSetBlockTypeProps) {
  const isActive = isBlockActive(editor, type);

  const toggleBlock = () => {
    if (isActive) {
      Transforms.setNodes(editor, { type: 'paragraph' });
    } else {
      Transforms.setNodes(editor, { type });
    }
  };

  return { toggleBlock, isActive };
}
