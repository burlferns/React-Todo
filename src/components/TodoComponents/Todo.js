import React from 'react';
// import './Todo.css';
import styled from "styled-components";

const DelPlain = styled.del`
  margin:0 0;
  width:fit-content;
`;

const PPlain = styled.p`
  margin:0 0;
  height:18px;
  width:fit-content;
`;

const DelHighL = styled.del`
  margin:0 0;
  height:18px;
  background-color:yellow;
  width:fit-content;
`;

const PHighL = styled.p`
  margin:0 0;
  height:18px;
  background-color:yellow;
  width:fit-content;
`;


class Todo extends React.Component {
    constructor() {
      super();
    }
      
    render() {

      const {todoItem, strikeToggle,searchValue}  = this.props; 

      const PlainDel = <DelPlain onClick={() => strikeToggle(todoItem.id)}  >{todoItem.task}</DelPlain>
      const PlainP = <PPlain onClick={() => strikeToggle(todoItem.id)}  >{todoItem.task}</PPlain>

      const HighLDel = <DelHighL onClick={() => strikeToggle(todoItem.id)}  >{todoItem.task}</DelHighL>
      const HighLP = <PHighL onClick={() => strikeToggle(todoItem.id)}  >{todoItem.task}</PHighL>

      const included = searchValue && todoItem.task.toLowerCase().includes(searchValue.toLowerCase());


      return (
        <div>
          
          
          {
            todoItem.completed
            ? (included ? HighLDel : PlainDel)
            : (included ? HighLP : PlainP)
          }


          {/* <p>{`The search value in Todo component is: ${searchValue}`}</p> */}


        </div>
      );
    }
  }
  
  export default Todo;
