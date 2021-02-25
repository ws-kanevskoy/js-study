const _ = require('lodash');

let snipNum = 1;

let p = () => console.log(`----- Snippet #${snipNum++} -----`);

/*
  Q: Объясните результаты, полученные в каждом console.log
  A: Изначально в примерах 3-7 передавались объекты по ссылке. Изменения затрагивали один объект, хотя и проводились через разные ссылки. С примерами 1-2 все просто - примитивы (строка, число) всегда копируются

  Q: Чем клонирование отличается от копирования по ссылке?
  A: При копировании по ссылке в новую переменную копируется ссылка на объект. Так, мы получаем две переменные, указывающие на один и тот же объект. Клонирование создает настоящие копии, а не просто передает ссылку.
  
  Q: Чем shallow copy отличается от deep copy?
  A: Shallow copy копирует только поверхностные свойства, а deep - все, в том числе вложенные

  Q: Что изменилось в каждом console.log ?
  A: Теперь все работает так, как и задумывалось :)
*/

// Example 1
p();
let a1 = 'Text'; // кладем в а1 строку
let b1 = a1; // кладем в б1 строку, она копируется, т.к. значения переменных копируются
a1 = 'another text'; // кладем в а1 новую строку
console.log('a1 = ', a1);
console.log('b1 = ', b1);

// Example 2
p();
let a2 = 28; // то же, что и со строками
let b2 = a2;
a2 = 41;
console.log('a2 = ', a2);
console.log('b2 = ', b2);

// Example 3
p();
let a3 = {
	name: 'Ivan Ivanov',
	age: 41,
};
// let b3 = a3; - b3 ссылается на объект a3 
let b3 = Object.assign({}, a3); // копия

a3.name = 'Igor Petrov'; // а3 меняет объект по ссылке
console.log('a3 = ', a3);
console.log('b3 = ', b3);


// Example 4
p();
let a4 = [1,3,5,7,9];
// let b4 = a4;
let b4 = _.cloneDeep(a4); // для копирования 

a4 = [2,4,6,8,10];
console.log('a4 = ', a4); 
console.log('b4 = ', b4); 

// Example 5
p();
let a5 = [1,2,3,4,5];
// let b5 = a5;
let b5 = _.cloneDeep(a5);

a5[0] = 0;
console.log('a5 = ', a5);
console.log('b5 = ', b5);

// Example 6
p();
let a6 = [1,2,3,4,5];
// let b6 = a6;
let b6 = _.cloneDeep(a6);

a6.push(6)
console.log('a6 = ', a6);
console.log('b6 = ', b6);

// Example 7
p();
let a7 = [{
	name: 'Vasya',
  age: 12
}, {
	name: 'Misha',
  age: 14
}, {
	name: 'Pavel',
  age: 13
}];
// let b7 = a7;
let b7 = _.cloneDeep(a7);

a7.map((obj)=> {
		obj.name = obj.name + ' Pupkin';
		obj.age = obj.age;
});
console.log('a7 = ', a7);
console.log('b7 = ', b7);