import { FC, ReactNode, useReducer } from 'react';
import { TodoContext } from './TodoContext';
import { TodoState } from '../interfaces/interfaces';
import { todoReducer } from './todoReducer';
const INITIAL_STATE: TodoState = {
	todoCount: 0,
	todos: [
		{
			id: '1',
			desc: 'First on the list of todos',
			completed: false,
		},
		{
			id: '2',
			desc: 'Second on the list of todos',
			completed: false,
		},
	],
	completed: 0,
	pending: false,
};
interface Props {
	children: ReactNode;
}
const TodoProvider: FC<Props> = ({ children }) => {
	const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);
	const toggleTodo = (id: string) => {
		dispatch({ type: 'toggleTodo', payload: { id } });
	};
	return (
		<>
			<TodoContext.Provider value={{ todoState, toggleTodo }}>
				{children}
			</TodoContext.Provider>
		</>
	);
};

export default TodoProvider;
