// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
    constructor() {
      super();
    }
      
    render() {
      const { toDoList,strikeToggle } = this.props;
      return (
        <div>
    
          {toDoList.map( elem => (

            <Todo 
              todoItem={elem}
              key={elem.id} 
              strikeToggle={strikeToggle}
            />

          ))}
          
          
        </div>
      );
    }
  }
  
  export default TodoList;

