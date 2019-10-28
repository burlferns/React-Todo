import React from 'react';
import './TodoForm.css';

class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        newItem: "",
      }
    }
      
    handleChanges = e => {
      this.setState({
        newItem: e.target.value
      });
    };


    addNew = e => {
      e.preventDefault();
      this.props.addNew(this.state.newItem);
      this.setState({ newItem: '' });
    };


    render() {
      const { clearCompleted } = this.props;
      return (
        <div>
          <form onSubmit={this.addNew}> 
            <input
              className="FormItem"
              type="text"
              name="item"
              id="item"
              value={this.state.newItem}
              onChange={this.handleChanges}
            />
            <button onClick={this.addNew}>Add Todo</button>
            <button onClick={clearCompleted}>Clear Completed</button>
          </form>
        </div>
      );
    }
  }
  
  export default TodoForm;