import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Breadcrumb from './components/Breadcrumb';
import TodoList from './containers/todoListContainer';
import TodoInput from './containers/todoInputContainer';
import NotFound from './components/NotFound';


 const App = (props) => {
  return (
    <div className="container m-5">
      <Breadcrumb />
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route path="/addTodo" component={TodoInput}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
