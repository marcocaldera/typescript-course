var button = document.querySelector('button');
// il ! indica che verrà sempre trovato questo elemento
// HTMLInputElement indica il type di elemento che ottengo
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
