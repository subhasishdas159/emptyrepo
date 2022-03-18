import { createContext } from "react";
import { Here } from "../comp/Here";

export const MyContext = createContext();

export default function Provider() {
  return (
    <div>
      <MyContext.Provider value={"something"}>
        <Here />
      </MyContext.Provider>
    </div>
  );
};

// export default Provider;
