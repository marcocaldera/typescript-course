// * UNKNOWN TYPE ancora non sappiamo cosa sarà questa variabile
// * È diverso da 'any' perchè any non permette alcun type-checking mentre con unknown per non avere errori dobbiamo controllare
var userInput;
var username;
userInput = 5;
userInput = 'Max';
// userName = userInput // !ERRORE: non è garantito che userInput sia una string
// esplito il check
if (typeof userInput === 'string') {
    username = userInput; // ok
}
// questa funzione restituisce "never" perchè lancia un errore no arriverà mai a ritornare qualcosa
// una funzione che non restituisce mai nulla
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError('An error occurred!', 500);
