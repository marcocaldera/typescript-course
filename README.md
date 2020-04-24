# typescript-course

## TYPES

https://www.typescriptlang.org/docs/handbook/basic-types.html

## UNDERSTANDING TS

### Watch singolo file
Per guardare (watch) i cambiamenti in un singolo file senza ricompilare ogni volta:

`$ tsc app.ts -w` 

or

`$ tsc app.ts --watch` 

### Watch intero progetto
Per compilare l'intero progetto dobbiamo indicare che una specifica folder corrisponde ad un progetto ts:

`$ tsc --init`

Questo comando crea un file `tsconfig.json`

Ora chiamando `$ tsc -w` rimaniamo in watch dell'intero progetto

