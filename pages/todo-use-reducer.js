import { useState, useReducer } from "react";

const reducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);
  if (action.payload === "add") {
    return { todos: [action.newTodo, ...state.todos] };
  }
  return { todos: state.todos };
};

const Todo = () => {
  const [newTodo, setNewTodo] = useState();

  const [state, dispatch] = useReducer(reducer, { todos: [] });

  return (
    <div>
      <form>
        <input type="text" onChange={(ev) => setNewTodo(ev.target.value)} />
        <button
          onClick={(ev) => {
            ev.preventDefault();
            dispatch({ payload: "add", newTodo });
          }}
          type="submit"
        >
          add
        </button>
      </form>
      {state.todos.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};

export default Todo;
