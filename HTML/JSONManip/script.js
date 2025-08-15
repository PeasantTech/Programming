const person1 = {name : "John", age : 40};
const person2 = {name : "Jane", age : 35};
const person3 = {name : "Jake", age : 30};
const person4 = {name : "Johan", age : 37};
const person5 = {name : "Jared", age : 32};

const personObj = {person1, person2, person3, person4, person5};

console.log(personObj);

for (const objKey in personObj) {
    console.log(personObj[objKey], objKey);
}