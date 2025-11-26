import {
  createListCollection,
  HeadingProps,
  Portal,
  Select,
} from '@chakra-ui/react';
import { CustomElementType } from '@model/types';
import React from 'react';
import { useSlate } from 'slate-react';
import { Heading } from './Heading/Heading';
export type HeadingOpt = {
  label: string;
  value: string;
  type: CustomElementType;
  size: HeadingProps['size'];
};

const BlockHeadingCollection = createListCollection({
  items: [
    { label: 'Paragraph', value: 'paragraph', type: 'paragraph', size: 'lg' },
    { label: 'Heading 1', value: 'H1', type: 'H1', size: '6xl' },
    { label: 'Heading 2', value: 'H2', type: 'H2', size: '5xl' },
    { label: 'Heading 3', value: 'H3', type: 'H3', size: '4xl' },
    { label: 'Heading 4', value: 'H4', type: 'H4', size: '3xl' },
    { label: 'Heading 5', value: 'H5', type: 'H5', size: '2xl' },
    { label: 'Heading 6', value: 'H6', type: 'H6', size: 'xl' },
  ] as HeadingOpt[],
});

export function HeadingSelection() {
  const editor = useSlate();
  return (
    <Select.Root collection={BlockHeadingCollection}>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {BlockHeadingCollection.items.map((heading) => (
              <Heading
                key={heading.type}
                headingOpt={heading}
                editor={editor}
              />
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
