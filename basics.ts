const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
	const result = n1 + n2
	if (showResult) {
		console.log(phrase + result)
	} else {
		return n1 + n2
	}
}

// ? si può anche scrivere :number ma non è una good-practice perchè ts lo riesce ad inferire perfettamente
const numberTest1: number = 5

// ? se invece non la inizializzo subito è una good-practice mettere il type
let numberTest: number
// così se qua assegno una stringa mi viene dato subito un errore
numberTest = 5

const number1 = 5
const number2 = 2.8
const printResult = true
const resultPhrase = 'Result is: '

const result = add(number1, number2, printResult, resultPhrase)
