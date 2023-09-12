import { useContext } from 'react';
import { Todo } from '../interfaces/interfaces';
import { TodoContext } from '../context/TodoContext';

interface TodoItemProps {
	todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
	const { toggleTodo } = useContext(TodoContext);
	const handleDbClick = () => {
		toggleTodo(todo.id);
		console.log('clicked', todo.id);
	};
	return (
		<li
			style={{
				cursor: 'pointer',
				textDecoration: todo.completed ? 'line-through' : '',
			}}
			onDoubleClick={handleDbClick}
		>
			{todo.desc}
		</li>
	);
};

export default TodoItem;
