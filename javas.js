
var date=(new Date()).getDay();
console.log(date);
// Get the current day
 var day = (new Date()).getDate();
 console.log(day);
// // Sample output: 31
// Get the current hour
 var hours = (new Date()).getHours();
 console.log(hours);
// // Sample output: 10
// Get the current minutes
 var minutes = (new Date()).getMinutes();
 console.log(minutes);
// // Sample output: 39
// Get the current seconds
 var seconds = (new Date()).getSeconds();
 console.log(seconds);
// // Sample output: 48
// Get the current milliseconds
// To get the milliseconds (ranging from 0 to 999) of an instance of a Date object, use its getMilliseconds method.
var milliseconds = (new Date()).getMilliseconds();
 console.log(milliseconds);
// // Output: milliseconds right no
function name1(){
    console.log("hellow");
}
name1()
var year=(new Date()).getFullYear();
var y=(new Date()).getMonth();
var e=(new Date()).setMinutes();
console.log(year);
console.log(y);
console.log(e);
var now=new Date();
console.log(now.toUTCString());