import React from 'react';
import './Todo.css';



class Todo extends React.Component {
    constructor() {
      super();
    }
    
  
    render() {
      const {todoItem, strikeToggle}  = this.props; 
      return (
        <div>
          
          { todoItem.completed
            ? <del className="TodoItem" onClick={() => strikeToggle(todoItem.id)}  >{todoItem.task}</del>
            : <p   className="TodoItem" onClick={() => strikeToggle(todoItem.id)}  >{todoItem.task}</p>

          }

        </div>
      );
    }
  }
  
  export default Todo;
