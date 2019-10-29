import React from 'react';
import './TodoForm.css';

class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        newItem: "",
      }
    }
      
    handleNewItem = e => {
      this.setState({
        newItem: e.target.value
      });
    };

    handleSearch = e => {
      this.props.searchInput(e.target.value);
    };


    addNew = e => {
      //console.log("addNew is executed in TodoForm & this.state.newItem is:",this.state.newItem);
      e.preventDefault();
      if(this.state.newItem) {
        this.props.addNew(this.state.newItem);
      }
      
      this.setState({ newItem: '' });
    };

    doNothing = e => {
      //This is to prevent page re-render when the enter key
      //is hit in the search form
      e.preventDefault();
    }


    render() {
      const { clearCompleted,searchValue } = this.props;
      return (
        <div>

          <form onSubmit={this.addNew}> 
            <label htmlFor="item">Add new item:</label>
            <input
              className="FormItem"
              type="text"
              name="item"
              id="item"
              value={this.state.newItem}
              onChange={this.handleNewItem}
            />
            <button onClick={this.addNew}>Add Todo</button>
            <button onClick={clearCompleted}>Clear Completed</button>
          </form>


          <form onSubmit={this.doNothing}> 
            <label htmlFor="search">Search for items:</label>
            <input
              className="FormItem"
              type="text"
              name="search"
              id="search"
              value={searchValue}
              onChange={this.handleSearch}
            />
          </form>

          {/* <p>{`The search value is: ${this.state.searchItem}`}</p> */}


        </div>
      );
    }
  }
  
  export default TodoForm;