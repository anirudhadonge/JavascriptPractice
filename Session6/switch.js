// switch() {

//     case "" :

//     case "" :

// }
// break;
//continue;
// Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec


let month = 'Feb'

// if(month=='Jan'){
//     console.log("This is the first month of the year");
// }else if(month=='Feb'){
//     console.log("This is the second month of the year");
// }else if (month=='Mar'){
//     console.log("This is the third month of the year");
// }else {
//     console.log("The value provided is other than those case statement.")
// }


// switch(month){
//     case 'Jan':
//         console.log("This is the first month of the year");
//         break;
//     case 'Feb':
//         console.log("This is the second month of the year");
//         break;
//     case 'Mar':
//         console.log("This is the third month of the year");
//         break;
//     default:
//         console.log("The value provided is other than those case statement.")
// }

// console.log("Came out of Switch");


for(let index=5; index<10; index++){
    if(index<8){
        console.log(`Index value:${index}`);
        continue;
    }else{
        console.log(`Index value at break:${index}`);
        break;
    }
}