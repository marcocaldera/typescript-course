// NOTA: in JS non esistono le interface, quindi compilando compaiono (e va bene così, servono a noi in sviluppo)

// Le interface sono come usare un custom type ma tipicamente su preferisce usare le interface
// type Person = {
// 	name: string
// 	age: number

// 	greet(phrase: string): void
// }

interface Person {
	name: string
	age: number

	greet(phrase: string): void
}

let user1: Person
user1 = {
	name: 'Marco',
	age: 26,
	greet(phrase: string) {
		console.log(phrase + ' ' + this.name)
	},
}

user1.greet('Ciaooo')

interface Named {
	// readonly: la variabile name non può essere cambiata dopo l'inizializzazione
	readonly name?: string /* optional variable */
	outpuName?: string /* optional variable */
	optionalMethod?(): void /* optional method */
}

// estendo con un'altra interfaccia (n.b., posso estendere più interfacce, non è come l'ereditarietà singola)
interface Greetable extends Named {
	greet(phrase: string): void
}

// ? Si possono implementare più interface contemporanemaente (al contrario dell'ereditarietà che è singola)
class Person2 implements Greetable {
	name?: string // possiamo scegliere se renderla opzionale o obbligatoria

	/* optional parameter, se non c'è 'n'= undefined */
	constructor(n?: string) {
		if (n) {
			this.name = n
		}
	}

	greet() {
		if (this.name) {
			console.log(this.name)
		}
	}
}

// let user2: Greetable
let user2: Person2
// user2 = new Person2('Marco')
user2 = new Person2()
user2.greet()

// INTERFACE FUNCTION
// type AddFn = (a: number, b: number) => number
interface AddFn {
	(a: number, b: number): number // anonymous function
}

let add: AddFn
add = (n1: number, n2: number) => {
	return n1 + n2
}
