import {
    INPUT_ACTION,
    ADD_ACTION,
    REMOVE_ACTION,
    CHANGE_TODOS_ACTION,
} from './constants';
const initState = {
    todos: [],
    todoInput: '',
};

function reducer(state, action) {
    const newTodos = [...state.todos];
    switch (action.type) {
        case INPUT_ACTION:
            return {
                ...state,
                todoInput: action.payload,
            };
        case ADD_ACTION:
            return {
                ...state,
                todos: [action.payload, ...state.todos],
            };
        case REMOVE_ACTION:
            newTodos.splice(action.payload, 1);
            return {
                ...state,
                todos: newTodos,
            };
        case CHANGE_TODOS_ACTION:
            newTodos[action.payload.index] = action.payload.value;
            return {
                ...state,
                todos: newTodos,
            };
        default:
            throw new Error('Error');
    }
}

export { initState };
export default reducer;
