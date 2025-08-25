/*

- browser have V8 which converts the javascript into machine language
- Nodejs runs the javascript in VS Code
- javascript gives error or etc only when you run the code
- var is not used becasue we can re decalre a variable if we use var 
- we cannot do that with const and let


console.log(a+b+x+y)
console.log(x+y+a+b)

a+b= 30 +string so ==> 30hello playwright 
x+y = hellp playwright + a - which will be converted to string and then b also converted into string  


subratction
------------------
console.log(5-'2') 
here the string will be converted into number only in case of subtraction  


the string will converted to number in 
-subtraction 
-multiplication 
-division 
-modulo

console.log(+"42") ==> num 42
consolelog(-"hello") ==> Nan

ASCII 

Capital  = 65 to 90
Small = 91 to 122
32 = Space 
10 = Newline(\n)

let str = "ABC"
console.log(str.charCodeAt(0))



let a =1
let b = a++  // a memory is only incremented here to 2 (post increment), b will be having 1 in its memory 
console.log(a)
console.log(b)

let c = 1 
let d = ++c // here d memory is incremented before with 2 (pre increment) the c will be also incremented 
console.log(c)
console.log(d)

let total = 100 
console.log(total++)  ==> 100
console.log(total)  ==> 101 

console.log((123).toString())
console.log(String(123))


let i = 11
let j = i++ + ++i (i++ = 12(memory of i) (11)memory of j & ++i = 13 )
console.log(i) // 13
console.log(j) // 24 
13
24


let a1 = 11
let b1 = 22

11+22+11+22+13+24 


let s = 0 
w  = s++ - --s + ++s - s--
s++  s =1 w = 0
--s  s = 0 w = 0
++s  s = 1 w = 0 
s--  s = 0 w = 0
w = 0 - 0 + 0 - 0


let sentence = "I love javaScript"
let words = sentence.split(" ")
console.log(words)
['I','love','JavaScript']  //output

let str = "aAJavascript"
let words = str.split(aA)
console.log(words)
["", "Javascript"] // output

const arr = [1,2,3,4,5]
console.log(arr.slice(-2))
4,5 //output 

FUNCTIONS

define the function and then we call it 
*/


