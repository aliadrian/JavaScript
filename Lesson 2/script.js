const nameArray = ['Hans','Isabelle','Gustav','Amanda','Ali','Sasha','Fredrik','Mali'];

const userArray = [
    { name: 'Hans', email: 'hans@hans.com', age: 35, status: true },
    { name: 'Isabelle', email: 'isabelle@domain.com', age: 28, status: true },
    { name: 'Gustav', email: 'gustav@domain.com', age: 31, status: false },
    { name: 'Amanda', email: 'amanda@domain.com', age: 42, status: true },
    { name: 'Ali', email: 'ali@domain.com', age: 23, status: true },
    { name: 'Sasha', email: 'sasha@domain.com', age: 44, status: true },
    { name: 'Fredrik', email: 'fredrik@domain.com', age: 53, status: true },
    { name: 'Mali', email: 'mali@domain.com', age: 42, status: false }
];

// lägg till i början
nameArray.unshift("Hejhej");

// lägg till i slutet
nameArray.push('dådå');

// ta bort i början
nameArray.shift();

// ta bort i slutet
nameArray.pop();



// LOOPAR (for, foreach, while)

// for - loopar ett givet antal gånger
for (let i = 0; i < 1; i++) {
   // console.log(`Index #${i} ::::: ${nameArray[i]}`);
}

for (let i = 0; i < userArray.length; i++) {
   // console.log(userArray[i].name + ', ' + userArray[i].age);
}

// foreach - loopar genom ett helt objekt/array/lista
for (let name of nameArray) {
   // console.log(name);
}
for (let user of userArray) {
   // console.log(user);
}

nameArray.forEach(function(name) {
    // console.log(name);
});

nameArray.forEach((name) => {
    // console.log(name);
});

userArray.forEach(function(user) {
    // console.log(user.name + ', ' + user.age);
});

userArray.forEach((user) => {
    // console.log(user.name + ', ' + user.age);
});


// WHILE-lOOP

let i = 4;

while (i < 5) {
    console.log('while: ' + i);
    i++;
}

do {
    console.log('do while: ' + i);
    i++;
} while (i < 5)