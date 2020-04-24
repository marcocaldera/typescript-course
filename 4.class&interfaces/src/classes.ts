/**
 * Nota: non si può creare un oggetto di una classe abastract (quindi non si può fare fare new Department())
 */
abstract class Department {
	static fiscalYear = 2020
	// private readonly id: string
	// private name: string

	/**
	 * protected mi permette di accedere alla variabile nelle classi
	 * che la estendono (ma cmq non fuori dalle classi come fosse public)
	 */
	protected employees: string[] = []

	/**
	 * SHORTCUT in questo modo vengono create delle variabili id con dentro già il valore passato nel 'new'
	 * @param id è readonly così non può essere modificato
	 * @param name
	 */
	constructor(protected readonly id: string, public name: string) {
		// this.id = id // ! NON SERVE PIù
		// this.name = name // ! NON SERVE PIù
	}

	static createEmployee(name: string) {
		return { name: name }
	}

	abstract describe(): void

	addEmployee(employee: string) {
		this.employees.push(employee)
	}

	printEmployeeInformation() {
		console.log(this.employees.length)
		console.log(this.employees)
	}
}

class ITDepartment extends Department {
	constructor(id: string, public admins: string[]) {
		// come prima cosa invoco il costruttore di sopra con i parametri
		super(id, 'IT')
	}

	describe() {
		console.log('IT Department')
	}
}

class AccountingDepartment extends Department {
	private lastReport: string
	private static instance: AccountingDepartment

	// GETTER
	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport
		}
		throw new Error('No report found!')
	}

	// SETTER
	set mostRecentReport(value: string) {
		this.addReport(value)
	}

	/* SINGLETON start */
	private constructor(id: string, public reports: string[]) {
		super(id, 'ACCOUNTING')
		this.lastReport = reports[0]
	}

	static getInstance() {
		if (this.instance) {
			return this.instance
		}
		this.instance = new AccountingDepartment('0', [])
		return this.instance
	}
	/* SINGLETON end */

	/* abstract method implementation */
	describe() {
		console.log('Accounting Department')
	}

	// OVERRIDE method
	addEmployee(name: string) {
		if (name === 'Marco') {
			return
		}
		// posso farlo perché 'employees' è 'protected' nella classe padre (e non private)
		this.employees.push(name)
	}

	// aggiungo nuovi metodi
	addReport(text: string) {
		this.reports.push(text)
		this.lastReport = text
	}

	printReports() {
		console.log(this.reports)
	}
}

// const accounting = new Department('0', 'Accounting') /* non si può creare un istanza di una classe abstract */
// const accountingCopy = { describe: accounting.describe, name: 'Marco' }
// accountingCopy.describe()

const employee1 = Department.createEmployee('Marco') /* static method */
console.log(employee1)
console.log(Department.fiscalYear) /* static variable */

const accounting1 = AccountingDepartment.getInstance() /* signleton */
// const accounting1 = new AccountingDepartment('0', []) /* non posso creare più così l'istanza perché il costruttore è private */
// console.log(accounting1.mostRecentReport) // ERROR

accounting1.addReport('Nuovo report 1')
accounting1.mostRecentReport = 'Nuovo report 2' // SET
console.log(accounting1.mostRecentReport) // GET
accounting1.addEmployee('Marco')
accounting1.addEmployee('Max')
console.log(accounting1)

const it = new ITDepartment('0', ['Marco'])
console.log(it)
it.addEmployee('Max')
it.addEmployee('Marco')
// it.employees[2] = 'cavoloo che brutto approccioo' // se employees è public potrei farlo
it.describe()
it.printEmployeeInformation()
