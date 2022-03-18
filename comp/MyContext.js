import { createContext } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children, ...rest }) => {
  return (
    <div>
      <MyContext.Provider value={"something"}>
        {children}
      </MyContext.Provider>
    </div>
  );
};
