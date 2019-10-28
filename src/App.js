import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: true,
        }
      ],
    };
  }

  strikeToggle = (id) => {
    this.setState({
      toDoList: this.state.toDoList.map( elem => {
        if(elem.id===id) {
          return {
            ...elem,
            completed: !elem.completed
          };
        } else {
          return elem;
        }
      })
    })
  }

  addNew = (name) => {
    const newItem = {
      task: name,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      toDoList: [...this.state.toDoList, newItem]
    });
  }


  clearCompleted = () => {
    this.setState({
      toDoList: this.state.toDoList.filter( elem => 
        elem.completed === false )
    })    
  }




  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          toDoList={this.state.toDoList} 
          strikeToggle={this.strikeToggle}
        />
        <TodoForm
          addNew={this.addNew}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
