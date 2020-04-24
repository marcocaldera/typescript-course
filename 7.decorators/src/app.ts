const WithTemplate_ = (template: string, hookId: string) => {
	return <T extends { new (...args: any[]): { name: string } }>(
		originalConstructor: T
	) => {
		// aggiungo della logica che viene chiamata quando un oggetto della classe viene instanziato
		// estendo la classe originaria aggiungendo della logica
		return class extends originalConstructor {
			constructor(..._: any[]) {
				super()
				const hookEl = document.getElementById(hookId)
				if (hookEl) {
					hookEl.innerHTML = template
					hookEl.querySelector('h1')!.textContent = this.name
				}
			}
		}
	}
}

@WithTemplate_('<h1>Mi chiamo Obj</h1>', 'app')
class Person_ {
	name = 'Max'

	constructor() {
		console.log('Creo tutto')
	}
}

const pers1 = new Person_()
console.log(pers1)

// -- auto bind

const AutoBind = (_: any, _2: string, descriptor: PropertyDescriptor) => {
	const originalMethod = descriptor.value
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = originalMethod.bind(this)
			return boundFn
		},
	}
	return adjDescriptor
}

// --- autobind

class Printer {
	message = 'Funziona'

	@AutoBind
	showMessage() {
		console.log(this.message)
	}
}

const printer = new Printer()
const button = document.querySelector('button')!
button.addEventListener('click', printer.showMessage)
