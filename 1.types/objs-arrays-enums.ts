// *  Assegnazione esplicita dei type (poco usato)
const person0: {
	name: string
	// ? posso anche assegnare direttamente un valore, es: 26 per consentire di usare solamente quel val quando si crea un oggeto di questo tipo
	age: number
} = {
	name: 'Marco',
	age: 26,
}

// * TS inferisce automaticamente i types, quando può (basta passare il mouse sopra 'person')
const person1 = {
	name: 'Marco',
	age: 26,
	hobbies: ['Sports', 'Cooking'],
}

/**
 * i: TUPLE TYPES
 * i: Se si sa che valori ci si aspetta in un array e quanti esattamente siano possiamo usare una tupla
 */
const person2: {
	name: string
	age: number
	hobbies: string[]
	role: [number, string] /* tuple type */
} = {
	name: 'Marco',
	age: 26,
	hobbies: ['Sports', 'Cooking'],
	role: [2, 'author'],
}

/**
 * i: ENUM TYPES
 * i: Serve per creare human-redable identifier
 * implicitamente ADMIN=0 READ_ONLY=1, etc..
 * se esplicitamente metto ADMIN = 5 allora READ_ONLY = 6 ,etc..
 */
enum Role {
	ADMIN = 5,
	READ_ONLY,
	AUTHOR,
}

const person = {
	name: 'Marco',
	age: 26,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN,
}

console.log(person.name)
console.log(person)

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase())
	// console.log(hobby.map()) // ! mi becco l'errore in compilazione perchè ts sa che hobby non è un array
}

// per avere mixed array usare any
// let favAct: any[]
// favAct = ['Ciao', 1]

// let favAct: string[]
// favAct = ['Calcio', 1] // ! mi becco l'errore in compilazione perchè 1 è un numero e non una stringa
