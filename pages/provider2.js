import { Here } from "../comp/Here";
import { MyContextProvider } from "../comp/MyContext";

const Provider = () => {
  return (
    <div>
      <MyContextProvider>
        <Here />
      </MyContextProvider>
    </div>
  );
};

export default Provider;
