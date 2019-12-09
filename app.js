//alert("Hello from app.js!");

const name = 'John';
const age = 25;
const job = "Software Developer";
const city = "Tallinn";

function hello(){
    return "Hello Friend!";
}

/*let html = '<ul><li>Name: '+name+'</li><li>Age: '+age+'</li><li>job: '+job+'</li><li>city: '+city+'</li></ul>';*/

//Template literal
let html = `
<ul>
    <li>Name:${name}</li>
    <li>Age:${age}</li>
    <li>Job:${job}</li>
    <li>City:${city}</li>
    <li>${name} says: ${hello()}</li>
</ul>
`;

document.body.innerHTML = html;

//get the data type of John's job
console.log(typeof(job));
//the data type of John's age
console.log(typeof(age));

//arrays
const numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1)
console.log(typeof(numbers1));

const numbers2 = new Array(6, 7, 8 ,9, 10);
//foreach loop
numbers2.forEach(number =>{
    console.log("Let count: ", number);
});

const mixedArray = [22, "banana", true];
mixedArray.forEach(element =>{
    console.log(element,"is a ", typeof(element));
});

//the lenght of the string element
console.log("Banana is a",mixedArray[1].length, "chars long");
//add'an elements to an array
mixedArray.push("apple");
//add an element to the begining of the array
mixedArray.unshift(1000);
//delete the last element
mixedArray.pop();
//delete the first element
mixedArray.shift();
//remove an element at cer
mixedArray.splice(1,1);
mixedArray.forEach(element=>{
    console.log("Update array: ", element)
});

//object literals
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    email: "john.doe@gmail.com",
    Hobbies: ['music', 'sports'],

    getYearOfBirth: function() {
        return 2019-this.age;
    }
}

let val;
val = person;
val = person.firstName;
val = person.lastName;
val = person['lastName'];
val = person.age;
val = person.Hobbies[1];
val = person.getYearOfBirth();
console.log(val);

const people = [
    {name: "John", age:25},
    {name: "Sarah", age:28},
    {name: "Tom", age:18}
]

people.forEach(person =>{
    console.log(person.name, "is", person.age, "years old");
});


