// INTERSECTION TYPES

type Admin = {
	name: string
	privileges: string[]
}

type Employee = {
	name: string
	startDate: Date
}

type ElevatedEmployee = Admin & Employee // COMBINAZIONE dei due (i.e., tutti gli elementi e non l'intersezione)

const e1: ElevatedEmployee = {
	name: 'Marco',
	privileges: ['test'],
	startDate: new Date(),
}

// --------------------------------

type Combinable = string | number
type Numeric = number | boolean

// il type diventa number perchè viene presa l'intersezione in questo caso
type Universal = Combinable & Numeric

// * TYPE GUARDS -----------------------------

const add = (a: Combinable, b: Combinable) => {
	// TODO TYPE GUARD
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString()
	}
	return a + b
}

type UnknownEmployee = Employee | Admin

const printEmployee = (emp: UnknownEmployee) => {
	console.log('Name: ' + emp.name)

	// TODO TYPE GUARD
	if ('privileges' in emp) {
		console.log('Privileges: ' + emp.privileges) // esiste solo in Admin
	}
	if ('startDate' in emp) {
		console.log('Date: ' + emp.startDate) // esiste solo in Employee
	}
}

// printEmployee(e1)
printEmployee({ name: 'Marco', startDate: new Date() })

class Car {
	drive() {
		console.log('Car Driving')
	}
}

class Truck {
	drive() {
		console.log('Truck Driving')
	}

	loadCargo(amount: number) {
		console.log('Loading cargo ...' + amount)
	}
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

const useVehicle = (vehicle: Vehicle) => {
	vehicle.drive()
	// TODO TYPE GUARD
	if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000)
	}
}

useVehicle(v1)
useVehicle(v2)

// DISCRIMINATED UNIONS (abbiamo una proprietà comune a tutte le interfacce che ci permette di discriminare tra di esse)

interface Bird {
	type: 'bird'
	flyingSpeed: number
}

interface Horse {
	type: 'horse'
	runningSpeed: number
}

type Animal = Bird | Horse // UNIONS

const moveAnimal = (animal: Animal) => {
	let speed
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed
			break
		case 'horse':
			speed = animal.runningSpeed
			break
	}
	console.log('Moving with speed: ' + speed)
}

moveAnimal({ type: 'bird', flyingSpeed: 100 })

// TYPE CASTING

// il ! indica che affermiamo con certezza che quell'elemento non sarà mai null

// const paragraph = document.querySelector('p')
const paragraph = document.getElementById('message-output')

// const userInputElem = <HTMLInputElement>document.getElementById('user-input')! /* type casting v1 */
const userInputElem = document.getElementById(
	'user-input'
)! as HTMLInputElement /* type casting v2 */
userInputElem.value = 'Ciaooo'

// INDEX TYPE/PROPERTY ---

interface ErrorContainer {
	// id: number // deve essere dello stesso tipo delle index property altrimenti non funziona
	[prop: string]: string // la chiave deve essere una stringa e il valore deve essere una string
}

const errorBag: ErrorContainer = {
	email: 'Non a valid email',
	1: 'Non a valid email', // posso usare un numero che poi viene interpretato come stringa
}

// FUNCTION OVERLOAD

function addNew(a: number, b: number): number
function addNew(a: string, b: string): string
function addNew(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString()
	}
	return a + b
}

const result = addNew('Marco', ' Lisy')
console.log(result.split(' '))

/**
 * OPTIONAL CHAINING per controllare se una property esiste o meno
 * Nota:
 * In questa situazione se job non esiste ts ce lo dice subito ma è solo
 * perchè può vedere il codice. Normalmente se questo codice è restituito dal backend
 * ts non ha conoscenza della situazione
 */

const fetchedUserData = {
	id: 'u1',
	name: 'Marco',
	job: { title: 'DEV', description: 'Bhoo' }, // tipicamente fetchando dati dal backand magari qualche dato potrebbe essere null
}

// console.log(fetchedUserData.job && fetchedUserData.job.title) // prima soluzione tipicamente usata in js
console.log(fetchedUserData?.job?.title) // optional chaining

// NULLISH COALESCING

const userInput = null

// il problema di questo approccio è che anche la stringa vuota è false (e magari ci va bene così, ma non sempre)
// const storedData = userInput || 'DEFAULT'

// Nullish coalescing (??) verifica solo null o undefined (la stringa vuota va bene)
const storedData = userInput ?? 'DEFAULT'
