import React, { useState } from 'react'
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import { Todo } from './todo.model'
//import { Route } from 'react-router-dom'

const App: React.FunctionComponent = () => {
	const [todos, setTodos] = useState<Todo[]>([])

	const todoAddHandler = (text: string) => {
		// così siamo certi che prevTodos contenga l'ultima versione di 'todos'
		setTodos((prevTodos) => [
			...prevTodos,
			{ id: Math.random().toString(), text: text },
		])
	}

	const todoDeleteHandler = (id: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== id)
		})
	}

	return (
		<div className="App">
			<NewTodo onAddTodo={todoAddHandler} />
			<TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
		</div>
	)
}

export default App
