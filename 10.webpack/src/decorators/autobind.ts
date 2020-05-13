// Autobind decorator
export const Autobind = (
	_: any,
	_2: string,
	descriptor: PropertyDescriptor
) => {
	const originalMethod = descriptor.value // salviamo il metodo originale di partenza
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		get() {
			const boundFn = originalMethod.bind(this)
			return boundFn
		},
	}
	return adjDescriptor
}
