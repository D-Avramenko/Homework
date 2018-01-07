
//Task 1
// function max(a,b){
// if(a>b) alert(a);
// else alert(b);
// }
// max(1,2);

//Task 2
// function min(){
// 	for (var i=0; i<arguments.length; i++){
// 	if	(arguments[i]<arguments[0])
// 			arguments[0]=arguments[i];
		
// }
// console.log(arguments[0]);
// }
// min(2,1,100);

// Task 3
// var arr=[
// 			user1={
// 				firstname: "Abama",
// 				lastname:"xz",
// 				age:39,
// 			},
// 			user2={
// 				firstname: "Vova",
// 				lastname:"Pytin",
// 				age:54,
// 			},
// 			user3={
// 				firstname: "Pidr",
// 				lastname:"Poroshenko",
// 				age:3,
// 			}
// ];
// var more18=arr.filter(function(item,i,age){
// 	return arr[i].age>18;
// });
// more18;

// arr.forEach(function(item,i){
// 	arr[i].fullname = arr[i].firstname + " " + arr[i].lastname;
// });

// var fullnew = arr.map(function(item, i, fullname){
// 	return arr[i].fullname;
// });

// fullnew;


//Task 4

var arr=[1,2,3,4,5];
function shift(arr){
	var b=[];
	for(var i=1,j=0,b=[];i<arr.length;i++,j++){
		b[j]=arr[i];
}
console.log(b);
console.log(arr);
};
shift(arr);

//Task 5
var arr=[1,2,3];
function push (arr){
	for(var i=0; i<5; i++){
	arr[arr.length]=prompt("Enter",4);
}
}
push(arr);
alert(arr);