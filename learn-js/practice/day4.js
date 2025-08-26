function person(){
    let name = "rishik"
    let age = 21
    let job = "A5"
    console.log(name)
    
}
person() // only if you call function 

//-----------------------------------------------------------

//lexical scope 
function outer(){
    let hero = "HULK"

    function inner(){
        let dialouge = `I am ${hero}!!!!!!`
        console.log(dialouge)
    }
    inner()
}
outer()

//----------------------------------------------------------


function add(x,y){
    console.log(x+y)
}
add(1,2)


const num = function(n){
    return n*n
}
console.log(num(10))

let arr = [add,num]
add(1,2),num(10)


//-------------------------------------------------------------


//callback function
function callTwice(func){
    func();
    func();
}

function laugh(){
    console.log("haahhahaha")
}
callTwice(laugh)   


//-------------------------------------------------------------


//set timeout function 
function jagratha(){
    alert("dengey mokshith")
}

setTimeout(jagratha,5000)

setTimeout(function(){
    alert("careful")
},5000)



//-------------------------------------------------------------

howl()
function howl(){
    console.log('bbbbbbbbbbbbb')
}


//-------------------------------------------------------------------

// forEach
const nums = [1,2,3,4,5,6,7,8,9]
//arr.forEach(function(parameter))
nums.forEach(function(num){
    console.log(num)
})

// arrow function

nums.forEach((n)=>{
    console.log(n+n)
}
)

//-------------------------------------------------------------
// forEach in array objects 


// map() here the original array is unchanged.
const texts = ['rishik','mokshith']
let str1 = ""
const caps = texts.map((str)=>{
    str1 = str.toUpperCase().split("").join(".")
    return str1
})

console.log(caps)


//implicit return 
const sqaure = x => x**2

const numbers = [1,2,3,4,5,6,7,8]

const arr1 = numbers.map(n=>{
   return n%2===0 ? "true" : "false"
})
console.log(arr1)


// example 
const bookRating = books.filter(book => book.rating > 4.5)
console.log(bookRating)

const authName = books.filter(book=> book.authorname.includes("ray"))
console.log(authName) 




// filter out 
const num2 = [1,2,3,4,5,6,7,8];
const odds = num2.filter(num=>{
    return num%2 === 1
})
console.log(odds)

const words = ['cat','elephant','dog','tiger']

const lenWords = words.filter(word=>{
    return word.length> 4
})
console.log(lenWords)


// every
const word1 = ['cat','elephant','dog','tiger']
const bool = word1.every(word=>word.length===3)
console.log(bool)

//some
const bool2 = word1.some(word=> word.length===3)
console.log(bool2)


const num3 = [1,2,3,4,5,6,7,8];
const retru = (num3.slice().sort((a,b) => b-a ))
console.log(retru)


const num4 = [1,2,3,4,5]
const calc = num4.reduce((a,b) =>{
    return a+b
})
console.log(calc)


console.log(Math.max(...[1,2,3,4,5,6,7,8]))
//... removes the brackets of the array 


const votes = ['y','y','n','y','y','n','y','y','y','y','y','y']
const count = votes.reduce((tally,vote)=>{
    tally[vote] = (tally[vote]||0)+1
    return tally
},{})


const arrnum = [1,2,3]
arrnum[100] =18
console.log(arrnum.length)

function muntiply(a,b=1){
    return a*b
}
//

function sumAll(){
    let sum =0
    for(add of arguments){
    sum += add
    }
    return sum 
}
console.log(sumAll(1,2,4,5))


function fullName(first,last,...titles){
    console.log(first)
    console.log(last)
    console.log(titles)
}
fullName("Book1","Book2","Book3","Book4","Book5")
// titles as an array stores the reamining books 


//Spread - breaks the array into individuals with commas
//Rest - collects elements into an array 


//destruturing arrays
//syntax to unpack
//values from arrays 
const raceResults = ["rishik","mokshith","satya","rohit"]
//const[gold,silver,brozne ] = raceResults
//console.log(gold,silver,brozne)

const [gold,...others] = raceResults
console.log(gold,others)

