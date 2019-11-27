$(function () {

    // OBJECT

    const obj1 = {
        firtsName: 'Object',
        lastName: 'Object'
    };

    const obj2 = {
        first: 'Object',
        last: 'Object'
    };

    // CLASS = Model

    // class Person {
    //     constructor(fullname) {
    //         this.fullName = fullname;
    //         this.firstName = function () {

    //         }
    //     }
    // }

    
    class Person  {
        constructor (firstName, lastName) {
            this.firstName = firstName,
            this.lastName = lastName,
            this.fullName = function() {
                return `${this.firstName} ${this.lastName}`;
            }
        }
        greeting() {
            return `Hello ${this.fullName()}`;
        }
    }

    let user1 = new Person('Adrian', 'Vilches');
    // document.write(user1.fullName());
    document.write(user1.greeting());
    
});