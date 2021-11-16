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
document.querySelector('.three').innerHTML = '<h3>kfmkff</h3>';
//task 11
document.querySelector('.four').innerHTML = '<h4>Header</h4><p>text</p>'
document.querySelector('.four').innerHTML += '<h4>End<h4/>'
//task 12
let a = document.querySelector('.five');
a.innerHTML = (3.14159);
//task 13
let div7 = document.querySelector('.seven');
div7.innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">';
//task 14
let z1 = 6;
let z2 = 3;
document.querySelector('.multiplication').innerHTML = z1 * z2;
//task 15
let y1 = 6;
let y2 = 3;
document.querySelector('.division').innerHTML = y1 / y2;
//task 16
let x1 = 'Hello';
let x2 = 5;
document.querySelector('.sum').innerHTML = x1 + x2;
//task 17
let d1 = document.querySelector('.test-1');
console.log(d1);
//task 18
let d2 = document.querySelector('.test-2');
console.log(d2);
d2 = 5;
console.log(d2);
//task 19
let divS3 = document.querySelector('.s3');
console.log(divS3);
divS3 = document.querySelector('.s4');
console.log(divS3);
//task 20
// document.querySelector('body').innerHTML = '';
