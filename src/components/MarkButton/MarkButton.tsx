import { Button } from '@chakra-ui/react';
import { CustomTextKey } from '@model/types';
import React, { ReactNode } from 'react';
import { useSlate } from 'slate-react';
import { isMarkActive } from 'utils/editor';

interface MarkButtonProps {
  format: CustomTextKey;
  label?: string;
  icon?: ReactNode;
}

export function MarkButton({ label, format, icon }: MarkButtonProps) {
  const editor = useSlate();

  const isActive = isMarkActive(editor, format);

  const toggleMark = () => {
    if (isActive) {
      editor.removeMark(format);
    } else {
      editor.addMark(format, true);
    }
  };

  return (
    <Button variant={isActive ? 'solid' : 'outline'} onClick={toggleMark}>
      {icon} {label}
    </Button>
  );
}
