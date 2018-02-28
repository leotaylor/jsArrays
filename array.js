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

var opp = test.split("").reverse().join("");
if (test === opp){
    console.log("same?", true);
} else{ 
    console.log("same?", false);
}

var animals = ['fish', 'dog', 'cat'];
var animalzElement = document.getElementById('animalz');

for(var i=0; i<animals.length; i++){
    console.log("animal:", animals[i]);
    animalzElement.innerHTML += "<h5>" + animals[i] + "</h5>";
}

// CHALLENGE 2 ------------

var book = 'catch 22';
var num = book.split(" ").pop();

console.log(num);

//  TEACHER SOLUTIONS
var book = "catch 22";
var bookSplit = book.split("");
var realNumz = [];
for(var j=0; j<bookSplit.length; j++){
    if(bookSplit[j]*1){
        realNumz.push(bookSplit[j]);
        
    }
}
console.log("answer", realNumz.join(""))