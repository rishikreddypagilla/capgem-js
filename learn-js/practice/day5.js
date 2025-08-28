//OOPS

let myTri ={
    a : 3,
    b :4,
    getArea: function(){
        return(this.a*this.b)/2;
    },
    getHypotenuse : function(){
        return Math.sqrt(this.a**2 + this.b**2);
    }

}
console.log(myTri.getArea())
console.log(myTri.getHypotenuse())


class Triangle {
    getArea(){
        return (this.a * this.b)/2
    }

    getHypotenuse(){
        return Math.sqrt(this.a**2 + this.b**2)
    }
}

let myTriangle = new Triangle()
myTriangle.a   =3
myTriangle.b = 4
console.log(myTriangle.getHypotenuse())


//######################################################################

// auto initialize the properties with constructors

class bankAccount {
    constructor(holder,accnum,balance=0){
        this.holder = holder
        this.accnum = accnum
        this.balance = balance 
    }

    desposit(amount){
        if(amount<=0){
            return
        }
        else{
            this.balance +=amount
            console.log(`the balance is ${this.balance} for account ${this.accnum}`)
        }
    }

    withdraw(taken){      
        if(taken>=this.balance){
            console.log("no enough funds")
        }
        else{
            this.balance -= taken
            return (`The withdraw amount is ${taken} and the new balance is ${this.balance}`)
        }
    }
}

let acc1 = new bankAccount("rishik",8340939541,4000)
acc1.desposit(1000)
console.log(acc1.withdraw(500))



//###############################################################################
// STATIC KEYWORD

class Cat {
    constructor(name,breed){
        this.name = name;
        this.breed = breed
    }
    static species = "meow species"
}

const blue = new Cat("simba", "hunter")
console.log(blue, Cat.species)

//################################################################################

class Book {
    constructor(title,author,year){
        this.title = title
        this.author = author
        this.year = year 
    }
    getSummary(){
        return (`title is ${this.title} by ${this.author}, published in ${this.year}`)
    }
}

class Ebook extends Book{
    constructor(title,author,year,fileSize,price){
        super(title,author,year)
        this.fileSize = fileSize
        this.price = price
    }

    download(){
        return (`Title of the book is  ${ this.title} and its size is ${this.fileSize}MB`)
    }

    getPrice(){
        return(`${this.title} is ${this.price}`)
    }
}

let bk1 = new Book("VK183","satya",2023)
let bk2 = new Ebook("VK","rishik",2024, 100,10)
console.log(bk1)
console.log(bk2.download())
console.log(bk1.getSummary())
console.log(bk2.getPrice())


const ebooks = [
    new Ebook ("Jp","rishik",2023,5,10),
    new Ebook ("JSasdsd","satya",2023,2,10),
    new Ebook ("JxcvxbxbS","mokshith",2023,1,10),
    new Ebook ("JcbcnS","rohith",2023,11,10),
    new Ebook ("JxbcbS","gowtham",2023,15,10)

];

ebooks.forEach(ebook =>{
    console.log(ebook.getSummary())
})

const largeBooks = ebooks.filter(ebook => ebook.fileSize>10);

largeBooks.forEach(ebook=>{
    console.log(`${ebook.title}, ${ebook.fileSize}`)
})


let arr = ebooks.map(ebook=>{
    console.log(ebook.title)
})



let findBook = ebooks.find((ebook) =>{
    return ebook.title==="Jp"
    
})
console.log(findBook.download())


let sortBooks = ebooks.sort((a,b)=> a.fileSize - b.fileSize)

sortBooks.forEach(ebook=>{
    console.log(`${ebook.title}, ${ebook.fileSize}`)
})



const person = {
    firstName : "rishik",
    lastName : "reddy",

    getFullName(){
        return(this.firstName +" "+this.lastName)
    },

    introduce(){
        console.log("Hi iam"+" "+this.getFullName());
    }
};

console.log(person.getFullName())
person.introduce()


const newPerson={
    first1 : "satya",
    second1 : "bhai",
    getFullName : person.getFullName
}
console.log(newPerson.getFullName())


class Car {
    constructor(brand){
        this.brand = brand
    }
    drive(){
        console.log(`iam driving ${this.brand}`)

        setTimeout(()=>{
                console.log("After 2 second"+ this.brand)
        })
    }
}
let c1 = new Car("honda")
let c2 = new Car("BMW")
c1.drive()
c2.drive()


const player = {
    score :10 ,

    increase(){
        console.log(this.score++)
    },
    decrease: () => console.log(this.scor--),
};
player.increase();
player.decrease(); // NaN 

class Cricle{
    constructor(radius){
        this.radius = radius
    }

    getCricumference(){
        console.log(this.radius*2)
    }
}

let cricle1 = new Cricle(2)
cricle1.getCricumference()


class Person{
    constructor(firstName,lastName){
        this._firstName = firstName
        this._lastName = lastName
    }
    get fullName(){
        return `${this._firstName} ${this._lastName}`
    }

    set fullName(name){
        const parts = name.split(" ")
        this._firstName = parts[0];
        this._lastName = parts[1];
    }
}

const p = new Person("rishik", "reddy")
console.log(p.fullName) 


class Cricle{
    #radius;

    constructor(radius){
        this.#radius = radius;
    }

    getRaduis(){
        return this.#radius;
    }
}

const c = new Cricle(4)
c.#radius