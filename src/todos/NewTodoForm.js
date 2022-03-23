import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createTodo } from './actions'
import './NewTodoForm.css'
import { todos } from './reducers'

const NewTodoForm = ({ todos, onCreatePressed }) => {
	const [inputValue, setInputValue] = useState('')
	return (
		<div className='new-todo-form'>
			<input
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				className='new-todo-input'
				placeholder='Type your new todo here'
				type='text'
			/>
			{/* <!--onClick on New Todo button creates isDuplicateText which tests to see if the inputValue matches any of the todos in the list. If it DOES NOT
			then it will run onCreatePressed, passing in inputValue as arg and reseting the input box to a empty string. isDuplicateText uses strict
			equals which ensure each entry is unique--> */}
			<button
				className='new-todo-button'
				onClick={() => {
					const isDuplicateText = todos.some((todo) => todo.text === inputValue)
					if (!isDuplicateText) {
						onCreatePressed(inputValue)
						setInputValue('')
					}
				}}
			>
				Create todo
			</button>
		</div>
	)
}

//this gives this component access to the todos from the state. they are passed in through props
const mapStateToProps = (state) => ({
	todos: state.todos,
})

//on created pressed is the function run when button is clicked, which passes text to createTodo and runs it as dispatch
const mapDispatchToProps = (dispatch) => ({
	onCreatePressed: (text) => dispatch(createTodo(text)),
})
// this special export using connect and these functions connects NewTodoForm to both the state and the store.
// its able to respond accordingly when an action happens
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)
