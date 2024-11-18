
let classA =['Anirudha','hitesh','Raunak']
let classB = ['Madhavi','Simbu','Sai','Muthu']
let classc =[1,2,3,4,5,6,7,8]
//          [0,1,2,3,4,5,6,7]
/// 0,1,2,3

// console.log(classB);
// classB.splice(0,1);
// console.log(classB);
//console.log(classc);
//classc.splice(4,2)
//console.log(classc);


//classc.splice(5,0,10,9,11)
// console.log(classc.splice(4,1));
// console.log(classc);

// classc[2] = 10;
// console.log(classc);

// console.log(classc.indexOf(4));
// classc[classc.indexOf(4)]= 15
// console.log(classc);
//original Array ---- preserved
// //original array --- modified

// classc.splice(4,2,15,10);

// console.log(classc);

// /// ... spread operator.

let spreadArray = [...classA,...classB]
console.log(spreadArray);
// let spreadArrayAdd = [classA,classB];
// console.log(spreadArray);
// console.log(spreadArrayAdd);


//console.log(classA);
//console.log(...classA);

