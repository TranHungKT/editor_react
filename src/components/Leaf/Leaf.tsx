import { Text } from '@chakra-ui/react';
import React from 'react';
import { RenderLeafProps } from 'slate-react';

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  return (
    <span {...attributes}>
      <Text
        fontWeight={leaf.bold ? 'bold' : 'normal'}
        display="inline-block"
        fontStyle={leaf.italic ? 'italic' : 'normal'}
      >
        {children}
      </Text>
    </span>
  );
};
