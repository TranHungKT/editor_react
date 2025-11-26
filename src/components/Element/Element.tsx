import { Heading } from '@chakra-ui/react';
import React from 'react';
import { RenderElementProps } from 'slate-react';

export function Element({ attributes, children, element }: RenderElementProps) {
  if (element.type === 'H1') {
    return <Heading size="6xl">{children}</Heading>;
  }
  if (element.type === 'H2') {
    return <Heading size="5xl">{children}</Heading>;
  }
  if (element.type === 'H3') {
    return <Heading size="4xl">{children}</Heading>;
  }
  if (element.type === 'H4') {
    return <Heading size="5xl">{children}</Heading>;
  }
  if (element.type === 'H5') {
    return <Heading size="xl">{children}</Heading>;
  }
  if (element.type === 'H6') {
    return <Heading size="lg">{children}</Heading>;
  }

  return <span {...attributes}>{children}</span>;
}
