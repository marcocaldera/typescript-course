// i: BUILT-IN GENERICS TYPE

const names: Array<string> = ['marco', 'lisy'] // uguale a dire string[]
const names2: Array<string | number> = ['marco', 'lisy']

const promise: Promise<string> = new Promise((res) => {
	setTimeout(() => {
		res('Done')
	}, 2000)
})

promise.then((data) => {
	data.split(' ')
})

/**
 * i: CREATING A GENERIC FUNCTION
 * Assegniamo dei type generici (T ed U) che quindi possono valere qualsiasi cosa
 * non vogliamo essere troppo specifici
 */
const merge = <T, U>(objA: T, objB: U) => {
	return Object.assign(objA, objB)
}

const mergedObj = merge({ name: 'Marco' }, { age: 26 })
const mergedObj2 = merge({ name: 'Marco', test: ['caioo'] }, { age: 26 })
const mergedObj3 = merge({ name: 'Marco', test: ['caioo'] }, 26)
mergedObj.name
console.log(mergedObj)

/**
 * i: GENERIC CONSTRAINT
 * In questo modo sto ad esempio dicendo:
 * T può avere una qualsiasi struttura ma deve essere un oggetto
 */
const merge_ = <T extends object, U extends object>(objA: T, objB: U) => {
	return Object.assign(objA, objB)
}

const mergedObj_ = merge_({ name: 'Marco' }, { age: 26 })
// const mergedObj2_ = merge_({ name: 'Marco', test: ['caioo'] }, 26 ) // ! ERROR ora non posso assegnare 26 (che è un semplice numero)
mergedObj_.name
console.log(mergedObj_)

// i: GENERIC FUNCITON
// accetto qualsiasi cosa che abbia una proprietà 'length'

interface Lengthy {
	length: number
}

const countAndPrint = <T extends Lengthy>(element: T): [T, string] => {
	let descriptionText = 'Got no value'
	if (element.length > 0) {
		descriptionText = 'Value: ' + element.length
	}
	return [element, descriptionText]
}

console.log(countAndPrint('Hi'))
console.log(countAndPrint([]))
console.log(countAndPrint(['sport', 'ciao', 'aiaiai']))

// ---- keyof U deve essere una chiave dell'oggetto T

const extractAndConvert = <T extends object, U extends keyof T>(
	obj: T,
	key: U
) => {
	return obj[key]
}
console.log(extractAndConvert({ name: 'ciao' }, 'name'))

// i: GENERIC CLASS

class DataStorage<T extends string | number> {
	private data: T[] = []

	addItem(item: T) {
		this.data.push(item)
	}

	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1)
	}

	getItems() {
		return [...this.data]
	}
}

const textStorage = new DataStorage<string>()
textStorage.addItem('ciao')
textStorage.addItem('marco')
textStorage.removeItem('marco')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()
numberStorage.addItem(10)

// const objStorage = new DataStorage<object>()
// objStorage.addItem({ name: 'Marco' })
// objStorage.addItem({ name: 'Lisy' })
// objStorage.removeItem({ name: 'Lisy' })
// console.log(objStorage.getItems())

// i: --- UTILITY TYPE GENERIC ----

interface CourseGoal {
	title: string
	description: string
	completeUntil: Date
}

// const createCourseGoal = (title: string, description: string, date: Date): CourseGoal => {
//     return {title: title, description: description, completeUntil: date}
// }

const createCourseGoal = (
	title: string,
	description: string,
	date: Date
): CourseGoal => {
	// è parziale/Partial quindi sostazialmente le prop sono facoltative e le posso aggiungere piano piano
	let courseGoal: Partial<CourseGoal> = {}
	courseGoal.title = title
	courseGoal.description = description
	courseGoal.completeUntil = date
	return courseGoal as CourseGoal
}

const namesList: Readonly<string[]> = ['Marco', 'Lisy']
// namesList.push('Ciao') //!ERRORE namesList è readonly
