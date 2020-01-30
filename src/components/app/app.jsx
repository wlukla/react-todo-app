import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

const App = () => {
  const todoData = [
    { label: 'Drink coffee', important: false, id: 1 },
    { label: 'Learn React', important: true, id: 2 },
    { label: 'Read book', important: false, id: 3 },
  ];
  return (
    <div className="container border border-primary rounded w-50 mt-5 p-5">
      <AppHeader />
      <SearchPanel />
      <TodoList todoList={todoData} />
    </div>
  );
};

export default App;
