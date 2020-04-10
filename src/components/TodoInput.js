import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

 class TodoInput extends Component {
    state = {
        text: '',
        redirectToList: false
    }
    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const todoTitle = this.state.text;
        this.props.addTodo(todoTitle);
        this.setState({
            text:'',
            redirectToList: true
        })
    }

    handleKeyDown = e => {
        if(e.keyCode == 13 && this.state.text != ""){
            const todoTitle = this.state.text;
            this.props.addTodo(todoTitle);
            this.setState({
                text:'',
                redirectToList: true
            })
        }
    }

    render(){
        const redirectToList = this.state.redirectToList;
        if (redirectToList === true) {
            return <Redirect to="/" />
        }
        return (
            <React.Fragment>
                <div class="row form-group" id="todo_input">
                    <input type="text" className="form-control col-md-6" placeholder="todo..."
                    onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
                    <button className="btn btn-info col-md-6" id="save_btn"
                    onClick={this.handleSubmit}>Save</button>
                </div>
            </React.Fragment>
        )
    }
}

export default TodoInput;
