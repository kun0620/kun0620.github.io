import React, { useState , useEffect } from 'react';
import { FaTrash, FaCheck } from 'react-icons/fa';

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
const [filter, setFilter] = useState('all')

useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  const [inputValue, setInputValue] = useState('');

  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        To-Do List
      </h1>
      <form onSubmit={handleAddTodo} className="grid grid-cols-4 gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="เพิ่มรายการใหม่..."
          className="col-span-3 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="col-span-1 bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-md hover:bg-blue-700 transition-colors"
        >
          เพิ่ม
        </button>
      </form>
      <div className="flex justify-center space-x-2 mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`py-1 px-3 rounded-md text-sm ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          ทั้งหมด
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`py-1 px-3 rounded-md text-sm ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          ที่ยังไม่เสร็จ
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`py-1 px-3 rounded-md text-sm ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          ที่ทำเสร็จแล้ว
        </button>
      </div>

      <ul className="space-y-2">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-3 rounded-md transition-colors duration-300 ${
              todo.completed ? 'bg-green-100 dark:bg-green-800' : 'bg-gray-50 dark:bg-gray-800'
            }`}
          >
            <span
              className={`flex-grow text-gray-800 dark:text-white ${
                todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
              }`}
            >
              {todo.text}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleToggleTodo(todo.id)}
                className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
              >
                <FaCheck />
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;