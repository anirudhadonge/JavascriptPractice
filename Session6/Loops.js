// // for(initial value, condition , increment)
// // while (condition)
// // do{ }while(condition)
// // for in
// // for of


// let myArray = [1,2,3,4,5,6,7,8]
// let index = 0;
// // for(let index=0;index<myArray.length; index++){
// //     if(myArray[index]<7){
// //     console.log(`${index}:${myArray[index]}`);
// //     }else{
// //         break;
// //     }
// // }


// // console.log('----- while ----')
// //  while(myArray[index]>7){
// //     console.log(`${index}:${myArray[index]}`);
// //     index++;
// //  }

// //  console.log('----- do while ----')
// //  do{
// //     console.log(`${index}:${myArray[index]}`);
// //     index++
// //  }while(myArray[index]>7)

// const obj ={
// name:"anirudha",
// course:"Javascript",
// day:"tuesday"
// }

// let keys = ['name','course','day'];
// for(let index=0;index<keys.length; index++){
//     let key = keys[index];
//     console.log(`${key}:${obj[key]}`);
// }

//console.log(obj['name']);
// for(const key in obj){
//     console.log(`${key}:${obj[key]}`);
// }
//

//forin  would get us the list keys
//forof it would get us the values
// let course = 'This is a playwright course.'
// for(const item of course){
//     console.log(item);
// }


// class user{
    
//     #privateVar;
//     static staticVar = 1;
//     constructor(username,password){
//         this.user = username;
//         this.password = password;
//     }

//     get getUsername(){
//         return this.user
//     }

//     set setUserName(user){
//         this.user = user;
//     }

//     display(){
//         console.log(`username:${this.user} and password:${this.password}`)
//     }

//     static displayStaticMethod(){
//         console.log("This is a static method.")
//     }
// }




// const user1 = new user("Anirudha","Donge");
// console.log(user1.user);
// console.log(user1.display())

// console.log(user.staticVar);
// console.log(user1.pri)
// user.displayStaticMethod();

class animal{
    constructor(numberOfLegs,food){
        this.numberOfLegs= numberOfLegs
        this.food = food;
    }

    display(){
        console.log(`The Animal has ${this.numberOfLegs} and eats ${this.food} and this is a ${this}`);
    }
}


let Animal = new animal(4,'meat');


class Cat extends animal{
    constructor(numberOfLegs,food){
        super(numberOfLegs,food);
    }

    display(){
        console.log(`The Animal has ${this.numberOfLegs} and eats ${this.food} and this is a cat`);
    }
}

// const cat = new Cat(4,"catfood");
// cat.display();

const ani = new animal(4,'meat');
ani.display();