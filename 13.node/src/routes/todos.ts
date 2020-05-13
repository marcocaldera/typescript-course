// const express = require('express')
// const Router = express.Router
import { Router } from 'express'
import {
	createTodo,
	getTodos,
	updateTodo,
	deleteTodo,
} from '../controllers/todo'

const router = Router()

router.post('/', createTodo)
router.get('/', getTodos)
// UPDATE con patch da usare quando: partial changes to an existing resource
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)

export default router
