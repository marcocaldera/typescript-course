import { DragTarget } from '../models/drag-drop.js'
import { Project, ProjectStatus } from '../models/project.js'
import Component from './base-component.js'
import { Autobind } from '../decorators/autobind.js'
import { projectState } from '../state/project-state.js'
import { ProjectItem } from './project-item.js'

// ProjectList class
export class ProjectList extends Component<HTMLDivElement, HTMLElement>
	implements DragTarget {
	// templateElement: HTMLTemplateElement
	// hostElement: HTMLDivElement
	// element: HTMLElement
	assignedProjects: Project[]

	constructor(private type: 'active' | 'finished') {
		// accedo a <section>
		super('project-list', 'app', false, `${type}-projects`)
		this.assignedProjects = []

		this.configure()
		this.renderContent()
	}

	private renderProjects() {
		const listEl = document.getElementById(
			`${this.type}-projects-list`
		)! as HTMLUListElement
		listEl.innerHTML = ''
		for (const prjItem of this.assignedProjects) {
			new ProjectItem(this.element.querySelector('ul')!.id, prjItem)
		}
	}

	@Autobind
	dragOverHandler(event: DragEvent) {
		if (
			event.dataTransfer &&
			event.dataTransfer.types[0] === 'text/plain'
		) {
			event.preventDefault()
			const listEl = this.element.querySelector('ul')!
			listEl.classList.add('droppable')
		}
	}
	@Autobind
	dropHandler(event: DragEvent) {
		const prjId = event.dataTransfer!.getData('text/plain')
		projectState.moveProject(
			prjId,
			this.type === 'active'
				? ProjectStatus.Active
				: ProjectStatus.Finished
		)
	}

	@Autobind
	dragLeaveHandler(_: DragEvent) {
		const listEl = this.element.querySelector('ul')!
		listEl.classList.remove('droppable')
	}

	configure() {
		this.element.addEventListener('dragover', this.dragOverHandler)
		this.element.addEventListener('dragleave', this.dragLeaveHandler)
		this.element.addEventListener('drop', this.dropHandler)

		projectState.addListener((projects: Project[]) => {
			const relevantProjects = projects.filter((prj) => {
				if (this.type === 'active') {
					return prj.status === ProjectStatus.Active
				}
				return prj.status === ProjectStatus.Finished
			})
			this.assignedProjects = relevantProjects
			this.renderProjects()
		})
	}

	renderContent() {
		const listId = `${this.type}-projects-list`
		this.element.querySelector('ul')!.id = listId // <ul></ul>

		this.element.querySelector('h2')!.textContent =
			this.type.toUpperCase() + ' PROJECTS'
	}
}
