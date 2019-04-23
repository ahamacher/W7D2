import merge from 'lodash/merge';
import { RECEIVE_TODOS } from '../actions/todo_actions'
import { RECEIVE_TODO } from '../actions/todo_actions'


const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};

const todosReducer = (state = initialState, action) => {
    // debugger
    Object.freeze(state); //we dont want to accidentally mutate this!
    let nextState = merge({}, state);
    switch(action.type){
        case 'RECEIVE_TODOS':
        //iterate through array!
             nextState = {};
             action.todos.forEach( (todo) => {
                 nextState[todo.id] = todo;
             });
             return nextState;
        case 'RECEIVE_TODO':
            nextState[action.todo.id] = action.todo;
            return nextState;
        default:
            return state;
    }
};


export default todosReducer;