import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

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

ReactDOM.render(<App />, document.getElementById('root'));
