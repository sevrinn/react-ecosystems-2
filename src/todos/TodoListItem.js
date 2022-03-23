import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ todo }) => (
	<div className='todo-item-container'>
		<h3>{todo.text}</h3>
		<div className='btn-container'>
			<button className='completed-btn'>Mark As Completed</button>
			<button className='remove-btn'>Remove</button>
		</div>
	</div>
)

export default TodoListItem
