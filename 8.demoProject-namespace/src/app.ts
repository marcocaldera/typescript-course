/**
 * i: In tsconfig.json abbiamo abilitato l'opzione "outFile": "./dist/bundle.js"
 * i: in questo modo viene tutto compilato in un unico file
 * i: (in quanto js non conosce i namespace e quindi avremmo dei problemi)
 */

// Per rendere il namespace App disponibile qua dentro dobbiamo scrivere questo particiolare commento:
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

namespace App {
	new ProjectInput()
	new ProjectList('active')
	new ProjectList('finished')
}
