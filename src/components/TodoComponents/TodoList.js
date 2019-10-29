// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
// import styled from "styled-components";

// const StylDiv = styled.div`
//   border:1px solid grey;
//   height:auto;
  

// `;


class TodoList extends React.Component {
    constructor() {
      super();
    }
      
    render() {
      const { toDoList,strikeToggle,searchValue } = this.props;
      return (
        <div>
    
          {/* {console.log("In TodoList. toDoList lenght:", toDoList.length)} */}

          {toDoList.map( elem => (

            <Todo 
              todoItem={elem}
              key={elem.id} 
              strikeToggle={strikeToggle}
              searchValue={searchValue}
            />

          ))}
          
        </div>
      );
    }
  }
  
  export default TodoList;

