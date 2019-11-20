// if (true) {
//     console.log('Do this');
// }

/* 
    == if something is equal
    === if something is equal and also the same datatype
*/

let string = '13';
let number = 13;

if (string === number) {
    console.log('These are the same');
} else {
    console.log('These are not the same');
}

if (string !== number) {
    console.log('These are the same');
} else {
    console.log('These are not the same');
}

/*
 < less than
 > higher than

 >= higher and equal than
 <= less and equal than
*/

// let x = 7;

x = 10 ? 'number is less than 10' : 'number is higher than 10';
console.log(x);

// let greeting = 'hej';
greeting = 'hallå' ? 'greeting is hallå' : 'gretting is hej';
console.log(greeting);