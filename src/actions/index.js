import * as types from '../constants/actionTypes'


export const addTodo = text =>{
    return { 
        type: types.ADD_TODO,
        text: text
    }
}

export const markTodoDone = id =>{
    return { 
        type: types.MARK_TODO_DONE,
        id: id
    }
}

export const deleteTodo = id =>{
    return { 
        type: types.DELETE_TODO,
        id: id
    }
}

/*
export function decrement(){
    return { type: types.DECREMENT }
}

export function reset(){
    return { type: types.RESET }
}
*/
