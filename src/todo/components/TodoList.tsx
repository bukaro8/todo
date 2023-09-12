import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
	const { todoState } = useContext(TodoContext);
	const { todos } = todoState;
	return (
		<>
			<ul>
				{todos.map((el) => (
					<TodoItem key={el.id} todo={el} />
				))}
			</ul>
		</>
	);
};

export default TodoList;
