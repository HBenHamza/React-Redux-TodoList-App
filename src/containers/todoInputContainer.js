import { connect } from 'react-redux';
import TodoInput from '../components/TodoInput';
import { addTodo } from '../actions';



const mapDispatchToPropos = dispatch => {
    return {
        addTodo: (text) => dispatch(addTodo(text)) 
    }  
}


export default connect(null,mapDispatchToPropos)(TodoInput);