// const express = require('express')
import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser'
import todoRoutes from './routes/todos'
const app = express()

// Middleware che parsifica tutti i json che arrivano in modo da poterci accedere con es: req.body.text
// i: questo middleware va messo prima di tutte le routes
app.use(json())

app.use('/todos', todoRoutes)

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: err.message })
})

app.listen(3000)
