import { Text } from '@chakra-ui/react';
import React, { CSSProperties } from 'react';
import { RenderLeafProps } from 'slate-react';

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  const getTextDecorationLine = () => {
    const textDecoration: CSSProperties['textDecorationLine'][] = [];

    if (leaf.underline) {
      textDecoration.push('underline');
    }
    if (leaf.strikeThrough) {
      textDecoration.push('line-through');
    }
    return textDecoration.join(' ');
  };

  return (
    <span {...attributes}>
      <Text
        fontWeight={leaf.bold ? 'bold' : 'normal'}
        display="inline-block"
        fontStyle={leaf.italic ? 'italic' : 'normal'}
        textDecorationLine={getTextDecorationLine()}
      >
        {children}
      </Text>
    </span>
  );
};
