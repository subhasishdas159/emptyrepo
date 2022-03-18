export const RefInput = ({ placeholder, inputRef }) => {
  return (
    <div>
      <input placeholder={placeholder} ref={inputRef} />
    </div>
  );
};
