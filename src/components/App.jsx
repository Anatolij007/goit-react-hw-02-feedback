import React, { Component } from 'react';
// import Counter from './Counter/';
// import Dropdown from './Dropdown/';
// import ColorPicker from './ColorPicker';
import TodoList from './TodoList';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodoCounr = todos.length;
    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <h1>Стан компонента</h1>
        {/* <Counter initialValue={10} />
      <Dropdown />
      <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Загальна кількість :{totalTodoCounr}</p>
          <p>Кількість виконаних :{completedTodos}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
export default App;
// ==================================

// export const App = () => {
//   return (
//     <>
//       <h1>Стан компонента</h1>
//       {/* <Counter initialValue={10} />
//       <Dropdown />
//       <ColorPicker options={colorPickerOptions} /> */}
//       <TodoList />
//     </>
//   );
// };
// ==================================

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAf50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D88' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
