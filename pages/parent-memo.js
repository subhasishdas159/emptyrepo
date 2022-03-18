import { useState } from 'react';
import { MemoizedChildMemo } from '../comp/ChildMemo';

const ParentMemo = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <MemoizedChildMemo />
      <input onChange={(ev) => setName(ev.target.value)} />
    </div>
  );
};

export default ParentMemo;
