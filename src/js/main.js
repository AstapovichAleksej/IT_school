let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out');

button.onclick = function() {
    // выполнится при нажатии кнопки Go
    console.log('Hello')
    console.log(inputIn.value); //value то что введино в input
    let b = +inputIn.value; // "+" преоброзовать в число
    div.innerHTML = b;
    console.log(b);

}

