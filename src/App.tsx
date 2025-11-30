import React, { useCallback, useState } from 'react';
import { createEditor, Descendant } from 'slate';
const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>' },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text: ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },

  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself!' }],
  },
];

import { HStack, StackSeparator } from '@chakra-ui/react';
import {
  Element,
  HeadingSelection,
  Leaf,
  MarkButton,
  Provider,
} from '@components';
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineUnderline,
} from 'react-icons/ai';
import {
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from 'slate-react';
import { StyledEditable } from 'styles';

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
        <HStack
          direction={'row'}
          separator={<StackSeparator />}
          style={{ marginBottom: '20px' }}
        >
          <HeadingSelection />

          <HStack gap={0}>
            <MarkButton format="bold" icon={<AiOutlineBold />} />
            <MarkButton format="italic" icon={<AiOutlineItalic />} />
            <MarkButton format="underline" icon={<AiOutlineUnderline />} />
            <MarkButton
              format="strikeThrough"
              icon={<AiOutlineStrikethrough />}
            />
          </HStack>
        </HStack>

        <StyledEditable
          renderLeaf={renderLeaf}
          renderElement={renderElement}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
        />
      </Slate>
    </Provider>
  );
};
