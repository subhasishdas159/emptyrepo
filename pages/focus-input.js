import { useEffect, useRef } from "react";
import { RefInput } from '../comp/RefInput'

const ForwardRef = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <RefInput placeholder="hellooo" inputRef={inputRef} />
    </div>
  );
};

export default ForwardRef;
