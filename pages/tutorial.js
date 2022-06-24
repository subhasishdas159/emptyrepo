export default function Tutorial() {
  return (
    <div className="">
      <Box className="" size='3xl' style={{ color: 'red' }}>
        dfj
      </Box>
      <br />
      <Box style={{ color: 'green' }}>
        dfj
      </Box>
      <br />
      <Box style={{ color: 'red' }}>dfj</Box>
    </div>
  );
}

const Box = ({ className = '', style, size, ...rest }) => {
  const sizeClassName = `text-${size}`
  console.log('sizeClassName', sizeClassName)
  return (
    // <div className={`${className} bg-blue-100 p-4`.trim()} {...rest}></div>
    <div
      className={`${className} ${sizeClassName} bg-blue-100 p-4`}
      style={{ fontStyle: 'italic', ...style }}
      {...rest}
    ></div>
  );
};

// const Box = (props) => {
//   return <div {...props} className="bg-blue-100 p-4"></div>;
// };
