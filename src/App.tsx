import React, { useCallback, useState } from 'react';
import { createEditor, Descendant } from 'slate';
const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

import { createListCollection, HeadingProps } from '@chakra-ui/react';
import {
  Element,
  HeadingSelection,
  Leaf,
  MarkButton,
  Provider,
} from '@components';
import { BlockButton } from '@components/BlockButton/BlockButton';
import { CustomElementType } from '@model/types';
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineUnderline,
} from 'react-icons/ai';
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from 'slate-react';

const BlockHeadingCollection = createListCollection({
  items: [
    { label: 'Paragraph', value: 'paragraph', type: 'paragraph', size: 'lg' },
    { label: 'Heading 1', value: 'H1', type: 'H1', size: '6xl' },
    { label: 'Heading 2', value: 'H2', type: 'H2', size: '5xl' },
    { label: 'Heading 3', value: 'H3', type: 'H3', size: '4xl' },
    { label: 'Heading 4', value: 'H4', type: 'H4', size: '3xl' },
    { label: 'Heading 5', value: 'H5', type: 'H5', size: '2xl' },
    { label: 'Heading 6', value: 'H6', type: 'H6', size: 'xl' },
  ] as {
    label: string;
    value: string;
    type: CustomElementType;
    size: HeadingProps['size'];
  }[],
});

export default () => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    [],
  );

  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    [],
  );

  return (
    <Provider>
      <Slate editor={editor} initialValue={initialValue}>
        <MarkButton format="bold" icon={<AiOutlineBold />} />
        <MarkButton format="italic" icon={<AiOutlineItalic />} />
        <MarkButton format="underline" icon={<AiOutlineUnderline />} />
        <MarkButton format="strikeThrough" icon={<AiOutlineStrikethrough />} />
        <BlockButton type="H1" icon={<AiOutlineStrikethrough />} />
        <Editable renderLeaf={renderLeaf} renderElement={renderElement} />
        <div />
        <div /> <div /> <div /> <div /> <div /> <div /> <div />{' '}
        <HeadingSelection />
      </Slate>
    </Provider>
  );
};
