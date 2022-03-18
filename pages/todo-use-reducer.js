import { useReducer, useState } from 'react';

const reducer = (state, action) => {
  if (action.type === 'add') {
    state = { todos: [action.payload, ...state.todos] };
  }
  return state;
};

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const [state, dispatch] = useReducer(reducer, { todos: [] });

  console.log('state', state);

  return (
    <div>
      <input type="text" onChange={(ev) => setNewTodo(ev.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: 'add', payload: newTodo });
        }}
      >
        submit
      </button>

      <br />

      {state.todos.map((todoItem, index) => (
        <div key={index}>{todoItem}</div>
      ))}
    </div>
  );
};

export default Todo;
