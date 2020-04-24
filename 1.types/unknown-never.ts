/**
 * i: UNKNOWN TYPE ancora non sappiamo cosa sarà questa variabile
 * i: È diverso da 'any' perchè con any va bene tutto
 * i: con unknown invece per non avere errori dobbiamo controllare e fare type-checking
 */
let userInput: unknown
let username: string

userInput = 5
userInput = 'Max'

// username = userInput // !ERRORE: non è garantito che userInput sia una string

// esplito il check
if (typeof userInput === 'string') {
	username = userInput // ok
}

/**
 * i: questa funzione restituisce "never" perchè lancia un errore, non arriverà mai a ritornare qualcosa
 * i: una funzione che non restituisce mai nulla
 */
const generateError = (message: string, code: number): never => {
	throw { message: message, errorCode: code }
}

generateError('An error occurred!', 500)
