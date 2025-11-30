import { Select } from '@chakra-ui/react';
import { CustomEditor } from '@model/types';
import React from 'react';
import useSetBlockType from 'utils/hooks/useSetBlockType';
import { HeadingOpt } from '../HeadingSelection';

interface HeadingProps {
  headingOpt: HeadingOpt;
  editor: CustomEditor;
}

export function Heading({ headingOpt, editor }: HeadingProps) {
  const { toggleBlock, isActive } = useSetBlockType({
    type: headingOpt.type,
    editor,
  });

  return (
    <Select.Item item={headingOpt} key={headingOpt.value} onClick={toggleBlock}>
      <>{headingOpt.label}</>
      <Select.ItemIndicator />
    </Select.Item>
  );
}
