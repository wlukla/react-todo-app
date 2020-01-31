import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import AddItem from '../add-item';

function filter(items, filterWord) {
  switch (filterWord) {
    case 'All':
      return items;
    case 'active':
      return items.filter((el) => !el.done);
    case 'done':
      return items.filter((el) => el.done);
    default:
      return items;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.maxId = 100;
    this.state = {
      todoData: [
        this.createTodoItem('Drink coffee'),
        this.createTodoItem('Learn React'),
        this.createTodoItem('Read book'),
      ],
      filterWord: '',
      mode: 'all', // all, active, done
    };


    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.updateMode = this.updateMode.bind(this);
  }

  onToggleImportant(id) {
    const { todoData } = this.state;
    this.toggleProperty(todoData, id, 'important');
  }

  onToggleDone(id) {
    const { todoData } = this.state;
    this.toggleProperty(todoData, id, 'done');
  }

  toggleProperty(arr, id, propName) {
    this.setState(() => {
      const idx = arr.findIndex((el) => el.id === id);

      const oldEl = arr[idx];
      const newEl = {
        ...oldEl,
        [propName]: !oldEl[propName],
      };

      const newArray = [
        ...arr.slice(0, idx),
        newEl,
        ...arr.slice(idx + 1),
      ];

      return { todoData: newArray };
    });
  }

  createTodoItem(label) {
    const id = this.maxId;
    this.maxId += 1;

    return ({
      label,
      important: false,
      id,
      done: false,
    });
  }

  addItem(label) {
    const newItem = this.createTodoItem(label);
    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem,
      ];
      return { todoData: newArr };
    });
  }

  deleteItem(id) {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((el) => el.id !== id),
    }));
  }

  updateFilter(filterWord) {
    this.setState(() => ({ filterWord }));
  }

  updateMode(mode) {
    this.setState(() => ({ mode }));
  }

  render() {
    const { todoData, filterWord, mode } = this.state;

    const todoCount = todoData.filter((el) => el.done === false).length;
    const doneCount = todoData.length - todoCount;

    let displayData = filter([...todoData], mode);

    if (filter) {
      displayData = displayData
        .filter((el) => el.label.toLowerCase().includes(filterWord.toLowerCase()));
    }

    return (
      <div className="container border border-primary rounded w-50 mt-5 p-5">
        <AppHeader todo={todoCount} done={doneCount} />
        <div className="d-flex">
          <SearchPanel onSearchChange={this.updateFilter} />
          <ItemStatusFilter
            filter={mode}
            onFilterChange={this.updateMode}
          />
        </div>
        <TodoList
          todoList={displayData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem onAdd={(label) => this.addItem(label)} />
      </div>
    );
  }
}

export default App;
