import { RequestHandler } from 'express'
import { Todo } from '../models/todo'

const TODOS: Todo[] = []

// in  alternativa a mettere il type a tutti i parametri
export const createTodo: RequestHandler = (req, res, next) => {
	const text = (req.body as { text: string }).text
	const newTodo: Todo = new Todo(Math.random().toString(), text)

	TODOS.push(newTodo)

	res.status(201).json({ message: 'Todo creato', createTodo: newTodo })
}

export const getTodos: RequestHandler = (req, res, next) => {
	res.json({ todos: TODOS })
}

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
	const todoId = req.params.id

	const updatedText = (req.body as { text: string }).text

	const todoIndex = TODOS.findIndex((todo) => todo.id === todoId)

	if (todoIndex === -1) {
		// Questo errore viene intercettato dal middleware che gestisce tutti gli errori ed invia una res 500
		throw new Error('Non è stato possibile trovare il todo')
	}

	TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText)

	res.json({ message: 'Aggiornato', updatedTodo: TODOS[todoIndex] })
}

export const deleteTodo: RequestHandler = (req, res, next) => {
	const todoId = req.params.id
	const todoIndex = TODOS.findIndex((todo) => todo.id === todoId)

	if (todoIndex === -1) {
		// Questo errore viene intercettato dal middleware che gestisce tutti gli errori ed invia una res 500
		throw new Error('Non è stato possibile trovare il todo')
	}

	TODOS.splice(todoIndex, 1)

	res.json({ message: 'Todo eliminato' })
}
