import React, { useState } from 'react';
import { createEditor, Descendant } from 'slate';
const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

import { Leaf, MarkButton, Provider } from '@components';
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineUnderline,
} from 'react-icons/ai';
import { Editable, RenderLeafProps, Slate, withReact } from 'slate-react';

export default () => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderLeaf = React.useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    [],
  );
  return (
    <Provider>
      <Slate editor={editor} initialValue={initialValue}>
        <MarkButton format="bold" icon={<AiOutlineBold />} />
        <MarkButton format="italic" icon={<AiOutlineItalic />} />
        <MarkButton format="underline" icon={<AiOutlineUnderline />} />
        <MarkButton format="strikeThrough" icon={<AiOutlineStrikethrough />} />
        <Editable renderLeaf={renderLeaf} />
      </Slate>
    </Provider>
  );
};
