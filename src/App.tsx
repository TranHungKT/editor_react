import React, { useState } from 'react';
import { createEditor, Descendant } from 'slate';
const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

import { Leaf, MarkButton, Provider } from '@components';
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
        <MarkButton label="B" format="bold" />
        <MarkButton label="I" format="italic" />
        <Editable renderLeaf={renderLeaf} />
      </Slate>
    </Provider>
  );
};
