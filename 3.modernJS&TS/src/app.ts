const userName = 'Max'
let age = 30

// ? ESEGUIRE I TEST DIRETTAMENTE NELLA CONSOLE DEL BROWSER

/**
 * Lo scope di "var" è o function o global
 * quindi dentro un if e come se l'avessi global e quindi posso accederci anche fuori dall'if
 */
// if (age > 20) {
// 	var test = true
// }
// console.log(test)

/**
 * Lo scope di "let" è invece legato anche agli if e in generale a qualsiasi blocco di codice
 * quindi quindi se provo ad accedere a test da fuori l'if ricevuto un errore
 */
// if (age > 20) {
// 	let test = true
// }
// console.log(test)

// ? ARROW FUNCTION

// const add = (a: number, b: number) => {
//     return a + b
// }
const add = (a: number, b: number) => a + b
console.log(add(2, 5))

// ? DEFAULT FUNCTION PARAM
const add1 = (a: number, b: number = 1) => a + b
console.log(add1(5))

// ? REST PARAMS
const addNew = (...numbers: number[]) => {
	return numbers.reduce((curResult, curValue) => {
		return curResult + curValue
	}, 0)
}
console.log(addNew(2, 3, 4, 5, 6))

const hobbies = ['c', 'i', 'a', 'o']
// Gli array sono ordinati quindi possiamo mettere i nomi che voglio
const [h1, h2, ...rest] = hobbies
console.log(rest)

const pe = {
	firstName: 'Marco',
	age: 26,
}

// Gli object non sono ordinati quindi vanno usate le stesse key nel destrutturarli
const { firstName, age: anni } = pe
