import { Todo, TodoState } from '../interfaces/interfaces';

export type TodoAction =
	| { type: 'addTodo'; payload: Todo }
	| { type: 'toggleTodo'; payload: { id: string } };

export const todoReducer = (
	state: TodoState,
	action: TodoAction
): TodoState => {
	switch (action.type) {
		case 'addTodo':
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case 'toggleTodo':
			return {
				...state,
				todos: state.todos.map(({ ...el }) => {
					if (el.id === action.payload.id) {
						el.completed = !el.completed;
					}
					return el;
				}),
			};

		default:
			return state;
	}
};
