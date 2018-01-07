//Task1
// Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
// Посчитайте сумму всех его чисел, включая строковые. 
// Выведите сумму в alert.
// var a=[1,2,3,"a","b","c","4","5","6"];
// var sum=0;
// for (var i=0; i<=a.length; i++) {
//     if(!isNaN(a[i])) sum+= +a[i];
// }
// alert(sum);

// Task2
// Сгенерируйте массив из n случайных чисел с двумя знаками после запятой.
// Переберите массив и распечатайте в консоли значения его жлементов,
// возведенные в пятую степень, не используя функцию Math.pow()
// var arr=[1,2,3,4,5];
// var a=0;
// for(var i=0;i<=arr.length;i++){
// 	console.log(a=arr[i]*arr[i]*arr[i]*arr[i]*arr[i]);
// }

// 3 Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// Добавьте в начало массива значение ‘Backbone.js’
// Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// Добавьте в массив значение ‘CommonJS’ вторым элементом
// Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
// var arr=["AngularJS","jQuery"];
// arr.unshift("Backbone.js");
// arr.push('React.JS',"Vue.js");
// arr.splice(1,0,'CommonJS');
// alert(arr.splice(arr.indexOf('jQuery'),1)+" "+"это здесь лишнее");

// 4 Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. Разбейте ее на массив слов,
//  и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...).
//   Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.
// var a ='Как однажды Жак звонарь сломал фонарь головой';
// a=a.split([' ']);
// a.splice(a.indexOf('головой'),1);
// a.splice(4,0,'головой');
// alert(a.join(' '));


// ﻿5 Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. С
//  помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. 
//  Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.
// var person = {
// 	firstname:"Jon",
// 	lastname:"Snow",
// 	age:30
// };
// var key=prompt("Enter key","");
// if (key in person) alert(person[key]);
// else {person[key]=prompt("Enter svoistvo","")}

// 6 Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt
//  (например: brand, model, resolution, color...), не используя вспомогательные переменные. Добавьте этот
//   гаджет персоне, созданной ранее.
// var person = {
// 	firstname:"Jon",
// 	lastname:"Snow",
// 	age:30
// };
// var phone={
// 	brand: prompt("Enter brand","Apple"),
// 	model: prompt("Enter model","7 Plus"),
// 	price: prompt("Enter","1000$")
// };
// person.phone=phone;

// 8 Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение
//  добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.
// var numbers = [];
// var arr=[];
// var sum=0;
// 	for(var i=0;i<5;i++){
// 	arr.push(prompt("Enter anything",""));
// }
// for(var j=0;j<=arr.length;j++){
// 	if(!isNaN(arr[j])) sum+= +arr[j];
// }
// alert(sum);

// 9 Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:
// var arr = []; 
// for (var i=1; i<=10;i++){
//  arr[i] = [];
//  for (var j=1; j<=10;j++){
//  arr[i][j] = i + 'x'+ j+'='+ i*j;
//  }
//  }

// 10 Создайте структуру данных, полностью описывающую html-разметку картинки.
var obj = {
tag:'<img>',
atribut:{ src: "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
alt:'',
style:'border:1px solid #ccc',
width:"200px"}
};
// JQuery будет выглядить вот так к 11 заданию.
var $imga=$(obj.tag).appendTo('body');
	for(var key in obj.atribut){
	$imga.attr(key, obj.atribut[key]);
}