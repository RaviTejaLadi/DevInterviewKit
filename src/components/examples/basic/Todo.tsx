import React, { useReducer } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
  input: string;
}

type Action =
  | { type: 'SET_INPUT'; payload: string }
  | { type: 'ADD_TODO' }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number };

const initialState: State = {
  todos: [],
  input: '',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, input: action.payload };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: state.input, completed: false }],
        input: '',
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const Todo: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (): void => {
    if (state.input.trim()) {
      dispatch({ type: 'ADD_TODO' });
    }
  };

  return (
    <div className="p-5 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-2">TODO</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={state.input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: 'SET_INPUT', payload: e.target.value })
          }
          onKeyPress={(e: React.KeyboardEvent) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo"
          className="flex-1 border text-foreground bg-inherit border-gray-300 rounded px-2 py-1"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Add
        </button>
      </div>
      <ul className="list-none p-0">
        {state.todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
              className="mr-2"
            />
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>{todo.text}</span>
            <button
              onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
              className="ml-3 text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
