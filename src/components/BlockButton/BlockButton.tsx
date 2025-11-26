import { Button } from '@chakra-ui/react';
import { CustomElementType } from '@model/types';
import React, { ReactNode } from 'react';
import { useSlate } from 'slate-react';
import useSetBlockType from 'utils/hooks/useSetBlockType';

interface BlockButtonProps {
  type: CustomElementType;
  icon?: ReactNode;
}

export function BlockButton({ type, icon }: BlockButtonProps) {
  const editor = useSlate();
  const { toggleBlock, isActive } = useSetBlockType({ type, editor });
  return (
    <Button variant={isActive ? 'solid' : 'outline'} onClick={toggleBlock}>
      {icon}
    </Button>
  );
}
