import { ADD_TODO , MARK_TODO_DONE, DELETE_TODO } from '../constants/actionTypes'
import uuid from 'react-uuid';

const todos = [
    {id:'0','title':'First Todo','done':false},
    {id:'1','title':'Second Todo','done':false},
    {id:'2','title':'Third Todo','done':true},
    {id:'2','title':'Fourth Todo','done':true}
];
const initialeState = todos;

const reducer = (state = initialeState,action) => {
    switch(action.type){
        case ADD_TODO :{
            return[
                ...state,
                {
                    id:uuid(),
                    title: action.text,
                    done:false
                }
            ]
        }
        case MARK_TODO_DONE:{
            const updatedTodos = state.map(todo => {
                if(todo.id == action.id){
                    todo.done = true;
                }
            }) 
            return [
                ...state,
                updatedTodos
            ]  
        }
        case DELETE_TODO: {
            return state.filter(todo => todo.id != action.id)
        } 
        default: return state;
    }
}

export default reducer;