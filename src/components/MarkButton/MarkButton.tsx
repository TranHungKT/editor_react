import { Button } from '@chakra-ui/react';
import { CustomTextKey } from '@model/types';
import React from 'react';
import { useSlate } from 'slate-react';
import { isMarkActive } from 'utils/editor';

interface MarkButtonProps {
  label: string;
  format: CustomTextKey;
}

export function MarkButton({ label, format }: MarkButtonProps) {
  const editor = useSlate();

  const toggleMark = () => {
    const isActive = isMarkActive(editor, format);
    if (isActive) {
      editor.removeMark(format);
    } else {
      editor.addMark(format, true);
    }
  };

  return (
    <Button variant="outline" onClick={toggleMark}>
      {label}
    </Button>
  );
}
