import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { markTodoDone, deleteTodo } from '../actions';


const mapStateToPropos = state => ({
    todos : state
})

const mapDispatchToPropos = dispatch => {
    return {
        markTodoDone: (id) => dispatch(markTodoDone(id)),
        deleteTodo: (id) => dispatch(deleteTodo(id))
    }  
}


export default connect(mapStateToPropos,mapDispatchToPropos)(TodoList);