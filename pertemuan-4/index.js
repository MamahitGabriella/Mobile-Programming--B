//Array

//let numbers = [1, 2, 3, 4, 5];
//let Gabriella = ["Gabriella", "Mamahit", 20, false];

//let numbers =new Array (1, 2, 3, 4, 5);
//let gabriella =new Array ("Gabriella", "Mamahit", 20, false);

//console.log(numbers[numbers.length - 1]);
//console.log(gabriella[gabriella.length - 1]);

//Object

const john = {
    firstNama: "John",
    lastName: "Doe",
    age: 33,
    isMarried: true,
    sayHello: function (){
        console.log("Hello");
    },
};

//const john = new Object();
//john.firstName = "John";
//john.lastName = "Doe";
//john.age = 33;
//john.isMarried = true;

console.log(john.lastName);
console.log(john["isMarried"]);

john.address = "Manado";
john["nationality"] = "Indonesian";
console.log(john);

john.sayHello();

//conditional

//Loop