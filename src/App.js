import { useRef } from 'react';
import { useStore } from './store';
import { actions } from './state';
import Todos from './Todos';
import './App.css';
function App() {
    const inputRef = useRef();
    const [state, dispatch] = useStore();
    const { todoInput } = state;
    const handleChangeInput = (e) => {
        const value = e.target.value;
        dispatch(actions.setInputAction(value));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const currentState = todoInput;
        if (currentState) {
            dispatch(actions.setAddAction(currentState));
            dispatch(actions.setInputAction(''));
        }
        inputRef.current.focus();
    };
    return (
        <div className="App">
            <form className="input-todo" onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    value={todoInput}
                    onChange={handleChangeInput}
                    placeholder="Please enter your job ....."
                ></input>
                <button type="submit" className="btn btn-submit">
                    Submit
                </button>
            </form>
            <Todos></Todos>
        </div>
    );
}

export default App;
