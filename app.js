//Lesson11
class Hater {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let user = new Hater('BackEnd','Developer');
user.sayName();