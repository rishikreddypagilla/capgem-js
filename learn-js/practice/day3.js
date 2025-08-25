const { use } = require("react")


let animals = [ 'mokshith','rohit','satya']
for(let i = 0 ; i<3; i++){
    console.log(animals[i])
}



// in case of infinite loops the condition is always true


let students = [
    {
        firstName : "Rishik",
        grade : 98
    },
    {
        firstName : "Mokshith",
        grade : 99
    },
    {
        firstName : "Satya",
        grade : 100
    }

]

const word = 'stressed'
let result = ''
let arr = [word.length-1]
for(let i=word.length-1 ; i>=0 ; i--){
   result += word[i];
   
}
console.log(result)

let i = 0
while(i<10){

    i++ 
}







// two 
let target = Math.floor(Math.random()*10)
let guest = Math.floor(Math.random()*10)
while(guest !== target){
    guest = Math.floor(Math.random()*10)
    
}
console.log(target,guest)


let animals1 = [ 'mokshith','rohit','satya']
for(let animal of animals1 ){
    console.log(animal)
}


for(let char of "words"){
    console.log(char)
}

1279


const fitbitData = {
    totalSteps : 308727,
    totalMiles : 211.07,
    avgCalorieBrun : '5755',
    workoutThisWeek : '5 of 7',
    45: 'fortyfive'
}

for(let x of Object.keys(fitbitData)){
    console.log(`key: ${x} , value: ${fitbitData[x]}`)
}

//console.log(Object.keys(fitbitData))
//console.log(Object.values(fitbitData))



//for(let x of Object.values(fitbitData)){
//   console.log(x)
// }



const moviesReviews = {
    movie1 : 9.1,
    movie2 : 9.2,
    moive3 : 9.3,
    moive4 : 9.6,
    moive5 : 9.5,
    moive6 : 9.4,
    moive7 : 9.7,
}

const rating = Object.values(moviesReviews)
let total = 0;
for(let val of rating){
    total += val/rating.length
}
console.log(total)

let a = 10 
let b = 20
let x = "hello"
let y = "playwright"


let num = 255 
let rev = 0
while(num >0){
    let temp = num % 10         //5    //5    //2
    rev = rev*10+temp           // 5   // 55  // 552 
    num = Math.floor(num/10)    // 25  // 2   // 0.2
}
console.log(rev)




function calc(naam){
    console.log(`hi ${naam}`)
}
calc('rishik')


function find(num1,num2,num3){
    let add = num1+num2+num3
    return add
}

console.log(find(a,b,c))


function isValidPassword(pass, username){
    let n = pass.length
    if(pass.includes(" ") && n<8 && pass === username){
        return false 
    }
    else{
        return true
    }
}
console.log(isValidPassword('89Fjjlnms', 'dogluvr'))


function avgArr(arr){
    let avg = 0
    for(let i =0; i<arr.length;i++){
        avg += arr[i]
    }
    avg = avg/arr.length
    return avg    
}
console.log(avgArr([75,76,80,95,100]))


function isPanagram(str){
    let all = 'qwertyuiopasdfghjklzxcvbnm'
    for(char of all){
        if(str.includes(char)){
            return true
        }
        else{
            return false
        }
    }
}

console.log(isPanagram('qwertyuiopasdfghjklzxcvbnm'))





function pick(arr){
    const Idx = Math.floor(Math.floor()*arr.length)
    return arr[Idx]
}
function getCard(){
    const arr1 = ['2','3','4','5','6','7','8','9','J','Q','K','A']
    const arr2 = ['club','spades','hearts','diamonds']  
    
    let random1 = pick(arr1)
    let random2 = pick(arr2)

    return {
        value: random1,
        suit : random2
    }

}

console.log(getCard())