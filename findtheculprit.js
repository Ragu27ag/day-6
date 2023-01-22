1. 

// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( “I’m JavaScript!’);
//  </script>
//  Whats the error in this ?
// </body>
// </html>

Ans : the colons in the alert

2.

// <!DOCTYPE html>
// <html>
// <body>
//  <script src= ”script.js”></script>
// </body>
// </html>
// scripts.js

// alert(“I’m invoked!”);

Ans : the reverse colons in the src  


3.

//explain.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// //script.js

// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working


Ans : I'm JavaScript!
Hello
Wor
ld
6


4.

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek"

Ans : admin = fname+' '+lname;


5.
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' );

Ans : alert(`hello ${name}`);


6.
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

ans : 
let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a + b);

7.
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

ans : 
let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a + b);

8.
var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

ans :
var a = "2" < "12";

9.
let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

Ans : giving no input(null or empty)


//10.


// let value = prompt('How many runs you scored in this ball');
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }


//Ans : 

let value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}


//11.


















//12.


// let message;
// let lock = 2;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);



//Ans :
 let message;
let lock ;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);



//13:

let message;
let lock = 2;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

//ans :
let message;
let lock ; // declared
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);



//14.

// let i = 3;
// while (i) {
//   console.log( --i );
// }

//ans :

let i = 3;
while (i) {
  console.log( i-- ); //post decrement
}


15.

// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)


//ans : 

while(num <= 10){
    console.log(num)
    num ++}



//16.

// for (let num = 2; num <= 20; num += 1) {
//     console.log(num)
//   }

//ans : 

for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }


//17.
// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }


//ans : 

let countdown = 100;
while (countdown < 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}


18.

// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);


//ans : 

Non empty Strings are true


19.


var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
 msg += “hi”;
 }
if (lemeout) {
 msg += ‘Hello’;
}
console.log(msg);

//ans : 
Non empty Strings are true


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Part 2 : Find the culprits and nail them — debugging javascript loops

//1.

//ans
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = '';
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);

//2.

//ans

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = '';
 
for (var i = 0; i < 11; i++) {
    if(i <= 9){
 new_string += numsArr[i] + ','
    }
    else
    new_string += numsArr[i] 
}
console.log(new_string);


3.

//ans

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = '';
 
for (var i = numsArr.length-1; i >= 0; i -- ) {
 new_string += numsArr[i] + ' '
}
console.log(new_string.trim());


4.

//ans

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = 'even'
 }
}
console.log(numsArr);


5.

//ans

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i %2 == 0 )
 {
 numsArr[i] = 'even'
 }
}
console.log(numsArr);


6.

//ans

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <=10; i++) {
 
 sum += numsArr[i]
}
console.log(sum);



7.

//ans

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0){
 sum += numsArr[i]
}
}
console.log(sum);


8.

//ans

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2 ==0)
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);


9.

//ans

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
 console.log( numsArr[i])
}

10.

//ans

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all='';
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
     str_all +=inner_array[j]
}
console.log(str_all);



11.

//ans

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
      if(j %2 == 0 )
      {
         inner_array[j] = 'even'
       }
}
}
console.log(numsArr);


12.

//ans


var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all='';
for (var i = numsArr.length-1; i >= 0; i--) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j >= 0 ;j-- ){
     str_all +=inner_array[j]+' '
}
}
console.log(str_all.trim());


13.

//ans

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j]%2 !=0)
 {
 sum_odd += inner_array[j]
 }
 else
 {
 sum_even += inner_array[j]
 }
}
}
console.log(sum_odd);
console.log(sum_even);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Part 3: Find the culprits and nail them — debugging javascript

1. 

//ans


aa = (f,s,t) => {
  //let f,s,t;
  //console.log(f,s,t);
  if(f>s &&f>t){
  console.log(f)}
  else if(s>f && s>t){
  console.log(s)}
  else{
  console.log(t)}
 }
 aa(1,2,3);


2.

//ans

let n = '123';
console.log(add(n));
function add(n)
{
let sum = 10;
for(var i=0;i<n.length;i++){
 sum+=Number (n[i])
 }
 return sum;
}



3.

//ans
const arr = [9,8,5,6,4,3,2,1];
(function()  {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})(arr);


4.

//ans

var arr = ['guvi', 'geek', 'zen', 'fullstack'];
var ano = function(arro) {
 for (var i = 0; i <= arro.length; i++) {
 console.log(arro[i][0].toUpperCase()  + arro[i].substr(1));
 }
}
ano(arr);


5.

//ans








6.

//ans

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
const sum1 = num.reduce(sum)
console.log(sum1);



7.

//ans









8.


//ans

var arr = ['guvi', 'geek', 'zen', 'fullstack'];
(function() {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})(arr);


9.

//ans


var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 0) {
 console.log(arr[i]);
 }}
})(arr);



10.

//ans 

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 != 0) {
 console.log(arr[i]);
 }}
})(arr);


11.

//ans

(function(str){
  str1 = str.split('').reverse().join('');
 console.log(str1); 
})('abcd')




12.

//ans

var res = function(arr){
  newArr = [];
for(var i=0; i < arr.length; i++){

if(arr.indexOf(arr[i]) == i) {
newArr.push(arr[i]);
} }
console.log(newArr)
}
res(['guvi','geek','guvi','duplicate','geeK'])





13.

//ans











