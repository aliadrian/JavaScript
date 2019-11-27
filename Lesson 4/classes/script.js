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
   
    
    // -----------------------------------------------------------------------
    // Hans code

        // OBJECTS - används när vi bara behöver skapa ett objekt
        const jsObj = {};

        // OBJECTS - kan ha olika properties i sig, samt funktioner
        const obj = {
            firstName: 'Hans',
            lastName: 'Mattin-Lassei',
            fullName: function() {
                return `${this.firstName} ${this.lastName}`
            }
        };
    
    
        // CLASSES - används när vi vill skapa flera objekt av samma typ/mall
        class JsClass {};
    
        // CLASSES - class är egentligen bara en genväg för prototypen av constructor
        class ProductClass {
            constructor(sku, name, description, price, tax) {
                this.sku =  sku;
                this.name = name;
                this.description = description;
                this.price = price;
                this.tax = tax;
            }
            totalPrice() {
                return this.price + this.tax;
            }
        }  
    
        // PROTOTYPE - så här ser en klass ut i grund och botten
        function ProductPrototype(sku, name, description, price, tax) {
            this.sku =  sku;
            this.name = name;
            this.description = description;
            this.price = price;
            this.tax = tax;
            this.totalPrice = function() {
                return this.price + this.tax;
            }
        }
    
        let product1 = new ProductClass();
        let product2 = new ProductPrototype();
    
    
        const products = [];
    
        for(i=0; i<10; i++) {
    
            let sku = `sku-${i*1}`;
            let name = `product-${i*241}`;
            let description = `this is a product ${1}`;
            let price = 10 + i;
            let tax = 25;
    
            products[i] = new ProductClass(sku,name,description,price,tax);
    
        }
    
        for(product of products) {
            // console.log(`Product: ${product.name}, Total Price: ${product.totalPrice()}`);
            // console.log(product.showDemo());
        }
    
    
    
        // EXTENDS - arv något ärver från en huvudklass
    
        // class Computer extends ProductClass {
        //     showDemo() {
        //         console.log('showing demo');
        //     }
        // }
    
        // let c1 = new Computer();
        // c1.showDemo();
    
    
        class Computer {
            constructor(name,price,brand,specification) {
                this.name = name;
                this.price = price;
                this.brand = brand;
                this.specification = specification;
            }
    
            showProductInfo() {
                console.log(`Product: ${this.name}, Price: ${this.price}, Specification: ${this.specification}`);
            }
        }
    
    
        let json = JSON.stringify(dbResults);
    
    
        const productList = JSON.parse(json);
    
        const newpl = [];
    
        for(i=0; i< productList.length; i++) {
            newpl[i] = new Computer(productList[i].name)
        }
});