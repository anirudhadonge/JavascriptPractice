
// let fun1 = function (var1 , var2){
//     this.var1 = var1;
//     this.var2 = var2;

//     let fun2 = function display() {
//         console.log(`var1 :${this.var1} and var2 :${this.var2}`);
//     }
// }


// class classDemo{

//     constructor(var1,var2){
//         this.var1= var1;
//         this.var2 = var2;
//     }

//     display() {
//         console.log(`var1 :${this.var1} and var2 :${var2}`);
//     }
// // }


// let obj1 = {
//     var1: 'var1',
//     var2: 'var2',
//     display() {
//         console.log(`var1 :${this.var1} and var2 :${this.var2}`);
//     }
// }


// let myObj1 = new obj1();
// console.log(myObj1)
// let myobj2 = new obj1();
// console.log(myobj2);
// myobj2.var1 ='Anirudha';

// console.log(myObj1);


// class MyClass{
//     #privateVar
//     constructor(var1, var2){
//         this.instvar1 = var1
//         this.instvar2 = var2
//         this.#privateVar = 20;
//     }

//     display(){
//         console.log(`instavar1:${this.instvar1} and private variable ${this.#privateVar}`);
//     }
// }

// let instOfMyclass = new MyClass("Anirudha",9);
// instOfMyclass.display();
// console.log(instOfMyclass.instvar1);
// console.log(instOfMyclass.instvar2);

// console.log(instOfMyclass.privateVar);


export class Animal{
    constructor(legs, food){
        this.legs = legs
        this.food = food
    }

        display(){
        console.log(`Animal with ${this.legs} and eats ${this.food}`);
    }
}

export default class Cat extends Animal{

    constructor(legs,food,color){
        super(legs,food)
        this.color = color;
    }
    
    display(){
        console.log(`cat with ${this.legs} and eats ${this.food} and a color ${this.color}`);
        super.display();
    }
}


export class Dog extends Animal{
    constructor(legs,food,color){
        super(legs,food)
        this.color = color;
    }
    
    display(){
        console.log(`cat with ${this.legs} and eats ${this.food} and a color ${this.color}`);
        super.display();
    }
}
