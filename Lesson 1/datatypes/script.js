// Variable = Something that contains information

/* 
    Javascript
    --------------------------------------------------------------
    String = Text
    Number = Number, decimal
    Boolean = True/false
    null = null (empty or nothing)
    undefined
    Object = an object or class that contains one or more values
    symbol
*/

/* 
    Declare variables
    --------------------------------------------------------------
    var
    let
    const

    var = global variable - accessible everywhere in the code
    let = local variable - accessible in a specified area
    const = value of a constant can't be changed through reassignment, and it can't be redeclared

    C# Example
        string name = "Adrian";
        int age = 23;
    JS Example
        name = 'Adrian';
        let age = 23;
*/

/* 
    Strings:
        let name = "Adrian"; - DON'T USE THIS
        let name = 'Adrian'; - USE THIS
        let name = `Adrian`; - Use this when using placeholders
*/

// let greeting = 'Hello';
// let name = 'Adrian';
// const age = 23;

// console.log(`${greeting} ${name} you're ${age} years old.`);

const person = {
    name: ['Adrian', 'Rebecca'],
    age: [29, 23],
    gender: ['male', 'female'],
    interests: ['food', 'music', 'skiing'],
    artists: ['Sia', 'Paris Shadows', 'Dua Lipa', 'Post Malone', 'Oliver Tree'],
    bio: function() {
        alert(`${this.name[0]} is ${this.age[1]}, likes to eat ${this.interests[0]} and to listen to artists like ${this.artists[0]} and ${this.artists[2]}`)
    },
    greeting: function() {
        alert('Hi I\'m ' + this.name[1] + '.');
    }
};

person.bio();
person.greeting();


// let nullValue = null;

// console.log(typeof null);

// let myName = 'Adrian';
// console.log(myName.length);