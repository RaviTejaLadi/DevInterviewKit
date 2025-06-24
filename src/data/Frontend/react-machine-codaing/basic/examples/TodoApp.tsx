import React, { useState } from 'react';
import { Plus, Trash2, Check, Circle } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

type FilterType = 'all' | 'active' | 'completed';

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');

  // Add a new todo
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toLocaleString(),
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle todo completion status
  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  // Filter todos based on current filter
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  // Handle enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // Get counts for each filter
  const getCounts = () => ({
    all: todos.length,
    active: todos.filter((todo) => !todo.completed).length,
    completed: todos.filter((todo) => todo.completed).length,
  });

  const counts = getCounts();
  const filteredTodos = getFilteredTodos();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Todo List</h1>
        <p className="text-center opacity-90">Stay organized and productive</p>
      </div>

      {/* Add Todo Section */}
      <div className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={addTodo}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2 font-medium"
          >
            <Plus size={18} />
            Add
          </button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="mb-6">
        <div className="flex gap-2 justify-center">
          {[
            { key: 'all', label: 'All', count: counts.all },
            { key: 'active', label: 'Active', count: counts.active },
            { key: 'completed', label: 'Completed', count: counts.completed },
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key as FilterType)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                filter === key ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>
      </div>

      {/* Todo List */}
      <div className="space-y-3">
        {filteredTodos.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Circle size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-lg mb-2">
              {filter === 'all' && 'No todos yet'}
              {filter === 'active' && 'No active todos'}
              {filter === 'completed' && 'No completed todos'}
            </p>
            <p className="text-sm">
              {filter === 'all' && 'Add your first todo above to get started!'}
              {filter === 'active' && 'All caught up! Great job!'}
              {filter === 'completed' && 'Complete some todos to see them here.'}
            </p>
          </div>
        ) : (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center gap-3 p-4 border rounded-lg transition-all duration-200 ${
                todo.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                  todo.completed ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-green-500'
                }`}
              >
                {todo.completed && <Check size={14} />}
              </button>

              <div className="flex-1 min-w-0">
                <p className={`text-lg ${todo.completed ? 'text-green-700 line-through' : 'text-gray-800'}`}>
                  {todo.text}
                </p>
                <p className="text-sm text-gray-500 mt-1">Created: {todo.createdAt}</p>
              </div>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="flex-shrink-0 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                title="Delete todo"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Stats Footer */}
      {todos.length > 0 && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Total: {counts.all} todos</span>
            <span>{counts.completed > 0 && `${Math.round((counts.completed / counts.all) * 100)}% completed`}</span>
          </div>
          {counts.completed === counts.all && counts.all > 0 && (
            <div className="mt-2 text-center text-green-600 font-medium">🎉 All todos completed! Great job!</div>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoApp;
