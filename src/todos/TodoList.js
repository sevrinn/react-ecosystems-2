import React from 'react'
import { connect } from 'react-redux'
import { removeTodo, markComplete } from './actions'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
	<div className='list-wrapper'>
		<NewTodoForm />
		{todos.map((todo) => (
			<TodoListItem
				key={todo.text}
				todo={todo}
				onRemovePressed={onRemovePressed}
				onCompletedPressed={onCompletedPressed}
			/>
		))}
	</div>
)

const mapStateToProps = (state) => ({
	todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
	onRemovePressed: (text) => dispatch(removeTodo(text)),
	onCompletedPressed: (text) => dispatch(markComplete(text)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
