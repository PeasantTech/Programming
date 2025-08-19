const person1 = { name: "John", age: 40 };
const person2 = { name: "Jane", age: 35 };
const person3 = { name: "Jake", age: 30 };
const person4 = { name: "Johan", age: 37 };
const person5 = { name: "Jared", age: 32 };

const array = [1, 2, 3, 4, 5];

// console.log(array.slice(-2));

const personObj = { person1, person2, person3, person4, person5 };

// console.log(personObj);

for (const objKey in personObj) {
    // console.log(personObj[objKey], objKey);
}

const randoFunc = nums => Math.floor(Math.random() * (nums[1] - nums[0]) + nums[1]);

// console.log(randoFunc(array));

const range = (x,y) => {
    for (const index in array) {
        console.log(array[index]);
        console.log(array[0]);
        if (array[index]+x > x && array[index]+x < y) {
            console.log(array[index]);
            array[index] = array[index - 1] + 1
        }
    }
}

range(4,8);