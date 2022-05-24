import { useRef, memo, useState } from 'react';
import { useStore } from './store';
import { actions } from './state';
const TodoContent = ({ className, index, children }) => {
    const inputRef = useRef();
    const [state, dispatch] = useStore();
    const { todos } = state;
    const [todosType, setTodoType] = useState('div');
    let TypeContent = todosType;
    const handleChangeType = () => {
        inputRef.current.focus();
        setTodoType('input');
    };
    const handleChangeTodo = (e) => {
        dispatch(
            actions.setChangeTodosAction({
                index,
                value: e.target.value,
            })
        );
    };
    return (
        <TypeContent
            ref={inputRef}
            onDoubleClick={handleChangeType}
            className={
                todosType === 'div'
                    ? className
                    : `input-${className} ${className}`
            }
            onChange={handleChangeTodo}
            value={todos[index]}
            onBlur={(e) => {
                if (e.target.value) {
                    setTodoType('div');
                }
            }}
        >
            {todosType === 'div' ? children : null}
        </TypeContent>
    );
};

export default memo(TodoContent);
