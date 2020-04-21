/**
 * RETURN TYPE
 * @param n1 number
 * @param n2 number
 * @returns il return viene inferioto da ts (in questo caso number)
 */
const add = (n1: number, n2: number) => {
	return n1 + n2
}

// Assegno esplicitamente il return type
// Se non è proprio necessario si può lasciare che lo inferisca ts da solo
const add1 = (n1: number, n2: number): number => {
	return n1 + n2
}

// void return
// anche qui viene tipicamente inferioto e non serve esplicitarlo
const printResult = (n1: number): void => {
	console.log('Result: ' + n1)
}
printResult(add(5, 12))

// Callbacks function
// la cbf è una funzione che fa qualcosa con il risultato che si ottiene all'interno di un metodo
const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
	const result = n1 + n2
	cb(result)
}
// in questo caso uso una funzione anonima com callback
addAndHandle(10, 20, (num) => {
	console.log(num)
})

// * FUNCTION TYPE
// let combineValues: Function
// accetto solo una funzione con due param integer e che restituisca un intero
let combineValues: (a: number, b: number) => number /* function type */
combineValues = add
// combineValues = printResult
// combineValues = 5
console.log(combineValues(5, 12))
