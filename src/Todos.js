import { memo } from 'react';
import { useStore } from './store';
import { actions } from './state';
import TodoContent from './TodoContent';
const Todos = () => {
    const [state, dispatch] = useStore();
    const { todos } = state;
    const handleRemove = (index) => {
        dispatch(actions.setRemoveAction(index));
    };
    return (
        <ul className="todos">
            {todos.map((todo, index) => (
                <li key={index} className="todo">
                    <TodoContent className="todo-content" index={index}>
                        {todo}
                    </TodoContent>
                    <button
                        className="btn btn-remove"
                        onClick={() => {
                            handleRemove(index);
                        }}
                    >
                        <ion-icon name="trash-sharp"></ion-icon>
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default memo(Todos);
