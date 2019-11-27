$(function() {

    let object = {};
    let objectArray = [];

    const person = {
        firstName: 'Adrian',
        lastName: 'Vilches',
        fullName: function() {
            return `${this.firstName}, ${this.lastName}`;
        },
        // Object
        adress: {
                street: 'Pilgatan 2',
                zipcode: 12345,
                city: 'Västerås',
                fullAdress: function() {
                    return `${this.street}, ${this.zipcode}, ${this.city}`;
                }
            },
        // Array
        phoneNumbers: [
            '073 - 123 12 12',
            '073 - 123 21 31'
        ],
        emailAdress: 'test@gmail.com'
    };

    // document.write(person.firstName);
    // document.write(person.lastName);
    // document.write(`<br>${person.firstName} ${person.lastName}<br>`);
    // document.write(person.fullName());
    // document.write(person.adress.city);
    // document.write(person.adress.fullAdress());
    console.log(person);

    // JSON
    let json = JSON.stringify(person);
    document.write(json);

    // JS
    let javascriptObj = JSON.parse(json);
    document.write(javascriptObj.firstName);
})