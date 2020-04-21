const button = document.querySelector('button')
// il ! indica che verrà sempre trovato questo elemento
// HTMLInputElement indica il type di elemento che ottengo
const input1 = document.getElementById('num1')! as HTMLInputElement
const input2 = document.getElementById('num2')! as HTMLInputElement

function add(num1: number, num2: number) {
	return num1 + num2
}

button.addEventListener('click', function () {
	console.log(add(+input1.value, +input2.value))
})

/*
tsc using-ts.ts
per compilare e generare using-ts.js
*/
