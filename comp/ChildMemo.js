import { memo } from "react";

const ChildMemo = () => {
  console.log('hello');
  return <div>ChildMemo</div>;
};

export const MemoizedChildMemo = memo(ChildMemo)