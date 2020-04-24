// i: tipicamente i decorator servono agli sviluppatori per fare cose e non per mostrare cose all'utente

/**
 * i: Decorator (alla fine è una funzione)
 * i: i decorator vengono eseguiti quando si definisce una classe
 * i: (non quando la si esegue instanziando degli oggetti)
 * @param constructor se il decorator è associato alla classe questo argomento è obbligatorio
 */
const Logger = (constructor: Function) => {
	console.log('Logging...')
	console.log(constructor)
}

/**
 * i: Decorator factory, ci permettono di passare parametri al decorator
 * i: nel modo di sopra avevamo solo quello predefinito e non potevamo aggiungerne
 * @param logString
 */
const Logger_ = (logString: string) => {
	return (constructor: Function) => {
		console.log(logString)
		console.log(constructor)
	}
}

const WithTemplate = (template: string, hookId: string) => {
	return (_: any) => {
		const hookEl = document.getElementById(hookId)
		// const p = new constructor()
		if (hookEl) {
			hookEl.innerHTML = template
			// hookEl.querySelector('h1')!.textContent = p.name
		}
	}
}

// i: vengono eseguiti in ordine bottom-up
@Logger
@Logger_('LOGGIN')
@WithTemplate('<h1>Mi chiamo Obj</h1>', 'app')
class Person {
	name = 'Max'

	constructor() {
		console.log('Creo tutto')
	}
}

const pers = new Person()
console.log(pers)

// i: dove altro possiamo mettere i decorator?

// per le property
const Log = (target: any, propertyName: string) => {
	console.log('Property decorator')
	console.log(target, propertyName)
}

// per getter e setter
const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
	console.log('Accessor decorator')
	console.log(target)
	console.log(name)
	console.log(descriptor)
}

// per i metodi
const Log3 = (
	target: any,
	name: string | Symbol,
	descriptor: PropertyDescriptor
) => {
	console.log('Method decorator')
	console.log(target)
	console.log(name)
	console.log(descriptor)
}

// per i parametri
const Log4 = (target: any, name: string | Symbol, position: number) => {
	console.log('Parameter decorator')
	console.log(target)
	console.log(name) // nome del metodo
	console.log(position) // posizione dell'argomento
}

class Product {
	@Log
	title: string
	private _price: number

	@Log2
	set price(val: number) {
		if (val > 0) {
			this._price = val
		} else {
			throw new Error('Invalid price')
		}
	}

	constructor(t: string, p: number) {
		this.title = t
		this._price = p
	}

	@Log3
	getPriceWithTax(@Log4 tax: number) {
		return this._price * (1 + tax)
	}
}
