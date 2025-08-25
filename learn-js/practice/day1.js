
const rahulKg = 78
const amanKg = 92
const rahulHeight = 1.69 
const amanHeight = 1.95 
const rahulBmi = rahulKg / rahulHeight ** 2
const amanBmi = amanKg / amanHeight ** 2
const higherBMI = amanBmi>rahulBmi
console.log({amanBmi,rahulBmi})
console.log(higherBMI)


STRING
let firstName = "Piyush"
let msg = 'Rishik'
let cricket = `Virat`


let secondName = "rishik"
console.log(typeof firstName)

/*
"ri\"sh"ik " is ok
"hi \"how are you"
'hi \'how are you' 

*/

// string concatination 
firstName + msg 

/*
"rishik" + 1 = 'rishik1
"1"+1 = '11'
*/

"RISHIK" 
//012345

console.log("rishik".length) 
6


// space have index too 
"rishik"
//if the index exceeds it gives undefined 
let str = "rishik"
console.log(str[str.length-1])


str[0] = "H"
console.log(str)


// string mutation 
// here we do not change or mutate the string 
// we create a new string in memory and assign it

let myName = "rishik"
myName = myName.toUpperCase()
console.log(myName) 

rishik
RISHIK 

// trim  
let game = "cricket     "
console.log(game.trim().toUpperCase())

game.trim() = "cricket"
toUpperCase() = "CRICKET"


//index
let popluar = "Virat"
console.log(popluar.indexOf("t"))

//slice : from which index to which index of the string is needed to print
let myName1 = " nikath afreen"
console.log(myName1.slice(1,8))


replace()
// replace(what,with)
console.log('baseball is ok'.replace('ok','not ok'))


// literals 
let olymoics = "USA" 
// here USA is a literal the value which we assigning are literals 

// replaceAll (he he he) || replace(he ha ha)
console.log("ha ha ha".replaceAll('ha','he'))


// index
let park = "YellowStone"
const index = park.indexOf('Stone')
console.log(index)
// 6

// string template literlas 
// it is more natural way of creating strings - easy to understand 

const peru = "rishik"
const job = "senior analyst"
const birthYear = "2004"
const year = "2025"

const str9 = `I'am ${peru} a ${year-birthYear} years old ${job}!`
console.log(str9)

console.log(`i counted total ${9+9} planes`)
 

//NULL - intentional absense of any value. It is explicity assigned 
//undefined - it is implicit /automatic

let loogedInUser
//Math oject is a utility object in JS 

console.log(Math.round(4.5))

console.log(Math.abs(-444))

console.log(Math.floor(6.69))

console.log(Math.random())
// between 0 and 1 excpet 1, decimal form


// print a whole number randomly between 1 and 10 

console.log(Math.floor(Math.random()*10)+1)


// parseInt
console.log(parseInt('28 days later'))
//28 output. 28 after space is there so it will not check

console.log(parseInt(3.7454545))

// equvilance class partitioning and boundary value class 


console.log( 0.1 + 0.2 === 0.3 )


let name122 = "77.6767"
console.log(7+parseInt(name122))