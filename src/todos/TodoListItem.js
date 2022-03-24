import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
	<div className='todo-item-container'>
		<h3>{todo.text}</h3>
		<div className='btn-container'>
			{todo.isCompleted ? null : (
				<button
					className='completed-btn'
					onClick={() => onCompletedPressed(todo.text)}
				>
					Mark As Completed
				</button>
			)}
			<button className='remove-btn' onClick={() => onRemovePressed(todo.text)}>
				Remove
			</button>
		</div>
	</div>
)

export default TodoListItem
