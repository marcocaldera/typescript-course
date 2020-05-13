import { Project, ProjectStatus } from '../models/project'

// Project state management
type Listener<T> = (items: T[]) => void

class State<T> {
	protected listeners: Listener<T>[] = []

	addListener(listenerFn: Listener<T>) {
		this.listeners.push(listenerFn)
	}
}

export class ProjectState extends State<Project> {
	private projects: Project[] = []
	private static instance: ProjectState

	private constructor() {
		super()
	}

	static getInstance() {
		if (this.instance) {
			return this.instance
		}
		this.instance = new ProjectState()
		return this.instance
	}

	addProject(title: string, description: string, numOfPeople: number) {
		const newProject = new Project(
			Math.random().toString(),
			title,
			description,
			numOfPeople,
			ProjectStatus.Active
		)

		this.projects.push(newProject)
		this.updateListenrs()
	}

	moveProject(projectId: string, newStatus: ProjectStatus) {
		const project = this.projects.find((prj) => (prj.id = projectId))
		if (project && project.status !== newStatus) {
			project.status = newStatus
			this.updateListenrs()
		}
	}

	private updateListenrs() {
		for (const listenerFn of this.listeners) {
			listenerFn(this.projects.slice()) //slice così semplicemente restituiamo una copia dell'array
		}
	}
}

/**
 * i: questa riga viene eseguita una sola volta
 * i: la prima volta che questo file è importanto da qualche parte
 */
export const projectState = ProjectState.getInstance()
console.log('Running')
