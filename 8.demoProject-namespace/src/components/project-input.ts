/// <reference path="base-component.ts" />
/// <reference path="../decorators/autobind.ts" />
/// <reference path="../util/validation.ts" />
/// <reference path="../state/project-state.ts" />

namespace App {
	// Project input class
	export class ProjectInput extends Component<
		HTMLDivElement,
		HTMLFormElement
	> {
		// templateElement: HTMLTemplateElement
		// hostElement: HTMLDivElement
		// element: HTMLFormElement
		titleInputElement: HTMLInputElement
		descriptionInputElement: HTMLInputElement
		peopleInputElement: HTMLInputElement

		constructor() {
			// accedo al <form>
			super('project-input', 'app', true, 'user-input')
			this.titleInputElement = this.element.querySelector(
				'#title'
			)! as HTMLInputElement // accedo a <input id="title" />
			this.descriptionInputElement = this.element.querySelector(
				'#description'
			)! as HTMLInputElement // accedo a <input id="description" />
			this.peopleInputElement = this.element.querySelector(
				'#people'
			)! as HTMLInputElement // accedo a <input id="people" />
			this.configure()
		}

		private gatherUserInput(): [string, string, number] | void {
			const enteredTitle = this.titleInputElement.value
			const enteredDescription = this.descriptionInputElement.value
			const enteredPeople = this.peopleInputElement.value

			const titleValidatable: Validatable = {
				value: enteredTitle,
				required: true,
			}
			const descriptionValidatable: Validatable = {
				value: enteredDescription,
				required: true,
				minLength: 5,
			}
			const peopleValidatable: Validatable = {
				value: +enteredPeople,
				required: true,
				min: 1,
				max: 5,
			}
			if (
				!validate(titleValidatable) ||
				!validate(descriptionValidatable) ||
				!validate(peopleValidatable)
			) {
				alert('Invalid input')
				return
			} else {
				return [enteredTitle, enteredDescription, +enteredPeople]
			}
		}

		private clearInput() {
			this.titleInputElement.value = ''
			this.descriptionInputElement.value = ''
			this.peopleInputElement.value = ''
		}

		@Autobind
		private submitHandler(event: Event) {
			event.preventDefault()
			const userInput = this.gatherUserInput()
			if (Array.isArray(userInput)) {
				const [title, desc, people] = userInput
				projectState.addProject(title, desc, people)
				this.clearInput()
			}
		}

		renderContent() {}

		public configure() {
			/**
			 * in questo modo il this dentro submitHandler si riferisce al this della classe
			 * altrimenti si riferirebbe al this del targe event del listener.
			 * in alternativa possiamo usare un decorator che fa l'autobind
			 */
			// this.element.addEventListener('submit', this.submitHandler.bind(this))
			this.element.addEventListener('submit', this.submitHandler)
		}
	}
}
