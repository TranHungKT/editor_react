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

import { Button } from '@chakra-ui/react';
import { Editable, Slate, withReact } from 'slate-react';

export default () => {
  const [editor] = useState(() => withReact(createEditor()));
  return (
    <Provider>
      <Button>Click me</Button>
      <Slate editor={editor} initialValue={initialValue}>
        <Editable />
      </Slate>
    </Provider>
  );
};
