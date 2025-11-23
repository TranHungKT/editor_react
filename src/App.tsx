import { Provider } from '@components/ui/provider';
import * as React from 'react';
import { useState } from 'react';
import { createEditor, Descendant } from 'slate';
const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

import MarkButton from '@components/MarkButton/MarkButton';
import { Editable, RenderLeafProps, Slate, withReact } from 'slate-react';

const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  return <span {...attributes}>{children}</span>;
};

export default () => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderLeaf = React.useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    [],
  );
  return (
    <Provider>
      <Slate editor={editor} initialValue={initialValue}>
        <MarkButton label="B" format="bold" />
        <Editable renderLeaf={renderLeaf} />
      </Slate>
    </Provider>
  );
};
