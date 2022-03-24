import { CREATE_TODO, REMOVE_TODO, MARK_COMPLETE } from './actions'

export const todos = (state = [], action) => {
	const { type, payload } = action
	//checks for action type from actions.js
	switch (type) {
		//gets text from payload, creates a new todo obj comprised of todo text and isComplete
		case CREATE_TODO: {
			const { text } = payload
			const newTodo = {
				text,
				isCompleted: false,
			}
			//returns current state of todos with newTodo concat'd to the top of list (non destructive)
			return state.concat(newTodo)
		}

		//gets text from payload, returns the current state with the todo.text filtered out (non destuctive)
		case REMOVE_TODO: {
			const { text } = payload

			return state.filter((todo) => todo.text !== text)
		}

		case MARK_COMPLETE: {
			const { text } = payload
			return state.map((todo) => {
				if (todo.text === text) {
					return { ...todo, isCompleted: true }
				}
				return todo
			})
		}
		// default case just returns the current state
		default: {
			return state
		}
	}
}
