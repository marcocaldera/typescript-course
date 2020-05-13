interface ValidatorConfig {
	[property: string]: {
		[validatableProp: string]: string[] // ['required', 'positive']
	}
}

const registeredValidators: ValidatorConfig = {}

const Required = (target: any, propName: string) => {
	console.log(target)
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: ['required'],
	}
}

const PositiveNumber = (target: any, propName: string) => {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: ['positive'],
	}
}

const validate = (obj: any) => {
	const objValidatorConfig = registeredValidators[obj.constructor.name]
	console.log(obj)
	if (!objValidatorConfig) {
		return true
	}
	let isValid = true
	for (const prop in objValidatorConfig) {
		for (const validator of objValidatorConfig[prop]) {
			switch (validator) {
				case 'required':
					isValid = isValid && !!obj[prop]
					break
				case 'positive':
					isValid = isValid && obj[prop] > 0
					break
			}
		}
	}

	return isValid
}

class Course {
	@Required
	title: string
	@PositiveNumber
	price: number

	constructor(t: string, p: number) {
		this.title = t
		this.price = p
	}
}

const courseForm = document.querySelector('form')!
courseForm.addEventListener('submit', (event) => {
	event.preventDefault()
	const titleEl = document.getElementById('title') as HTMLInputElement
	const priceEl = document.getElementById('price') as HTMLInputElement

	const title = titleEl.value
	const price = +priceEl.value

	const createdCourse = new Course(title, price)
	if (!validate(createdCourse)) {
		alert('Error')
	}
	console.log(createdCourse)
})
