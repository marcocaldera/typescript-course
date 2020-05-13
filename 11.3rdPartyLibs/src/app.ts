/**
 * i: Per fare in modo che una libreria js sia utilizzabile in pieno
 * i: con ts installare anche lo @types --> "@types/lodash": "^4.14.150",
 */
import _ from 'lodash'
console.log(_.shuffle([1, 2, 3]))

// -----------

declare var GLOBAL: any
console.log(GLOBAL)

// -----------

import { Product } from './product.model'
import 'reflect-metadata'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'

// fetch data from a server
const products = [
	{ title: 'A title', price: 10 },
	{ title: 'A book', price: 12.0 },
]

const newProd = new Product('', 12.99)
validate(newProd).then((errors) => {
	if (errors.length > 0) {
		console.log(errors)
	} else {
		console.log(newProd.getInformation())
	}
})

// per trasformare degli oggetti in delle istanze di una classe
const loadedProducts = plainToClass(Product, products)
// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price)
// })

for (const prod of loadedProducts) {
	console.log(prod.getInformation())
}
