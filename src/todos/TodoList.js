import React from 'react'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'

const TodoList = ({
	todos = [{ text: 'hello' }, { text: 'hello once more' }],
}) => (
	<div className='list-wrapper'>
		<NewTodoForm />
		{todos.map((todo) => (
			<TodoListItem todo={todo} />
		))}
	</div>
)

export default TodoList
