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

//task 1
console.log('Алексей');
//task 2
console.log(09);
//task 3
console.log('Добро' + 'пожаловать' + 'на курс');
//task 4
// alert(2019);
//task 5
// alert(2019-200);
//task 6
document.getElementById('one').innerHTML = 'Hello World';
//task 7
document.getElementById('two').innerHTML = 12*12;
//task 8
document.querySelector('.one').innerHTML = 'Hello World';
//task 9
document.querySelector('h2>span').innerHTML = 'world';
//task 10
document.querySelector('.three')
//task 11
//task 12
//task 13
//task 14
//task 15
//task 16
