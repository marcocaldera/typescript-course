const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
	const result = n1 + n2
	if (showResult) {
		console.log(phrase + result)
	} else {
		return n1 + n2
	}
}

/**
 * i: Se inizializzo una variabile posso anche omettere il type
 */
const numberTest1 = 5

/**
 * i: Se non inizializzo subito invece è meglio mettere il type
 * i: così se poi assegno una stringa mi viene dato subito un errore
 */
let numberTest: number
numberTest = 5

const number1 = 5
const number2 = 2.8
const printResult = true
const resultPhrase = 'Result is: '

const result = add(number1, number2, printResult, resultPhrase)
