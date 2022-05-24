import {
    ADD_ACTION,
    INPUT_ACTION,
    REMOVE_ACTION,
    CHANGE_TODOS_ACTION,
} from './constants';
export const setInputAction = (action) => {
    return {
        type: INPUT_ACTION,
        payload: action,
    };
};

export const setAddAction = (action) => {
    return {
        type: ADD_ACTION,
        payload: action,
    };
};
export const setRemoveAction = (action) => {
    return {
        type: REMOVE_ACTION,
        payload: action,
    };
};
export const setChangeTodosAction = (action) => {
    return {
        type: CHANGE_TODOS_ACTION,
        payload: action,
    };
};
