console.log("hi");

// Exercise 1 ---------
var test1 = 'cat';
var test2 = 'racecar';
var test3 = 'bear';
var test4 = 'mom';

var splitString = test2.split("");
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join("");
    if (test2 === joinArray){
        console.log(true);
    } else{
        console.log(false);
    }


    // Teacher solution
var test = "cat";

var opp = test.split("").reverse.().join("");
if (test === op){
    console.log("same?", true);
} else{ 
    console.log("same?", false);
}