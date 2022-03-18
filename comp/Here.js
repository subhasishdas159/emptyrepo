import { useContext } from 'react';
import { MyContext } from '../pages/provider';
// import { MyContext } from "../comp/MyContext";

export const Here = () => {
  const passedData = useContext(MyContext);
  console.log('passedData', passedData);
  return <div style={{ color: 'red' }}>Here</div>;
};
