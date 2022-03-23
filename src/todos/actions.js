export const CREATE_TODO = 'CREATE_TODO'

// createTodo takes in text as an arg and returns an object with
export const createTodo = (text) => ({
	type: CREATE_TODO,
	payload: { text },
})

export const REMOVE_TODO = 'REMOVE_TODO'

// removeTodo takes in text  as an arg and returns an obj with remove_todo as type and text parameter as payload
export const removeTodo = (text) => ({
	type: REMOVE_TODO,
	payload: { text },
})
