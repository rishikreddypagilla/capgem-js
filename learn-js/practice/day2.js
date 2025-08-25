const { use } = require("react")

let a = 10
let b = 20 
let swap = b
b = a
a = swap 
console.log(a,b)


let num = 2;
num === 2 ? console.log("True") : console.log("False")


let status1 = 'offline'

let color = status1 === color ?  red :  green 


const arr = new array()



console.log(typeof(undefined))



let fruits = ["apple", "banana"]
let veggies = ["tomato", "potato", "brinjal"]

console.log(fruits.join())    


let fruit = ["apple", "banana","coconut","dragon","egg","food","grape"]
console.log(fruit.splice(5,3))
console.log(fruit)



//objects in javascript 

const fitbitData = {
    totalSteps : 308727,
    totalMiles : 211.07,
    avgCalorieBrun : '5755',
    workoutThisWeek : '5 of 7',
    45: 'fortyfive'
}
console.log(fitbitData[45])
// numeric keys are allowed but not with dot notation.

const numbers1 = {
    100: 'one hundred',
    16 : 'sixteen',
    '76 trombones' : 'great song'
}
 
numbers1[100]
numbers1['100']
numbers1["76 trombones"]



// use dont notation whenever possible
// only for the dynamic expressions, use the square bracket 
// syntax 

const userReviews = {}
userReviews['queeneBee'] = 4.0
userReviews.mrSmith = 3.5
userReviews['queeneBee'] += 2 
userReviews.mrSmith++
console.log(userReviews)

const student = {
    firstName : 'rishik',
    lastName : 'Reddy',
    stengths : ['cricket', 'football'],
    exams : {
        midterm : 100,
        final : 99
    }

}
console.log(student.exams.midterm)
console.log(student.stengths[1])

// primitive type it checks the value and the data
// reference type it checks the address

