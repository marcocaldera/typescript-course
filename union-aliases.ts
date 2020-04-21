// * UNION TYPE + LITERAL TYPE + CUSTOM TYPE

/*
 * CUSTOM TYPE
 * Bisogna usare un qualsiasi identificatore che non sia già built in in js (e.g., Date non è consentito)
 * Usare custom type serve xk così lo possiamo utilizzare in giro in maniera più semplice ed efficace
 */

type Combinable /* custom type */ = number | string /* union type */
type ConversionDescriptor = 'as-number' | 'as-text' /* literal type */

type User /* custom type */ = { name: string; age: number }
const u1: User = { name: 'Max', age: 30 }

const combine = (
	input1: Combinable,
	input2: Combinable,
	resultConversion: ConversionDescriptor
) => {
	let result
	if (
		(typeof input1 === 'number' && typeof input2 === 'number') ||
		resultConversion === 'as-number'
	) {
		result = +input1 + +input2
	} else {
		result = input1.toString() + input2.toString()
	}
	return result
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

const combinedStringAges = combine('30', '26', 'as-number')
console.log(combinedStringAges)

const combinedNames = combine('Marco', 'Lisy', 'as-text')
console.log(combinedNames)
