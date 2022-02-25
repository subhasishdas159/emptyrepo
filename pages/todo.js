import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  return (
    <div>
      <form>
        <input type="text" onChange={(ev) => setNewTodo(ev.target.value)} />
        <button
          onClick={(ev) => {
            ev.preventDefault();
            setTodos((todos) => [newTodo, ...todos]);
          }}
          type="submit"
        >
          add
        </button>
      </form>
      {todos.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};

export default Todo;
