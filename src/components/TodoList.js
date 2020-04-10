import React, { Component } from 'react';

 class TodoList extends Component {
     getTodos(todos = this.props.todos) {
        const listItems = todos.map((todo) =>
            <div className="todo-list-item">
                <label htmlFor={`item${todo.id}`} key={todo.id}
                style={todo.done ? {textDecoration:'line-through'} : {}}
                onClick={(id) => this.markTodoDone(todo.id)}>{todo.title}</label>
                <span onClick={(id) => this.deleteTodo(todo.id)}
                style={(todo.done ? {display:'none'} :{} )}><i class="fa fa-trash-o"></i></span>
            </div>
        );
        return (
          <React.Fragment>
                {listItems}
          </React.Fragment>
        );
      }
      markTodoDone = id => {
          this.props.markTodoDone(id);
      }
      deleteTodo = id => {
          this.props.deleteTodo(id);
      }
    render(){
        const doneTodos = this.props.todos.filter(todo => todo.done);
        const pendingTodos = this.props.todos.filter(todo => !todo.done);
        return (
            <React.Fragment>
            <h1 className="display-4 text-center">React-Redux Todo List</h1>
            <div className="todo_lists">
            <div className="todoList">
                <div className="items">
                <h4 className="text-warning display-6">Pending ...</h4>
                    { this.getTodos(pendingTodos) }   
                </div>
            </div>
            <div className="todoList">
                <div className="items">
                    <h4 className="text-success display-6">Done !</h4>
                    { this.getTodos(doneTodos) }                    
                </div>
            </div>
            </div>
            </React.Fragment>
            
        )
    }
}


export default TodoList;
