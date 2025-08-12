const parentObject = {
    obj1: { name: "Alpha", value: 10 },
    obj2: { name: "Beta", value: 20 },
    obj3: { name: "Gamma", value: 20 },
    obj4: { name: "Delta", value: 20 },
    obj5: { name: "Epsilon", value: 20 },
    obj6: { name: "Zeta", value: 20 }
};

console.log(parentObject);

Object.entries(parentObject).forEach(([key, value]) => {
    if (parentObject[key] === "Alpha") {
        const returnObj = parentObject[key];
        console.log(returnObj);
    }
})


// const parentObject = {
//   obj1: { name: "Alpha", value: 10 },
//   obj2: { name: "Beta", value: 20 }
// };

// const targetName = "Beta";

// // Find the key whose child object has the matching name
// const foundEntry = Object.entries(parentObject).find(([key, value]) => value.name === targetName);

// if (foundEntry) {
//   const [matchedKey, matchedValue] = foundEntry;

//   // Store it in a new object using the original key name
//   const newObject = {
//     [matchedKey]: matchedValue
//   };

//   console.log(newObject);
//   // Output: { obj2: { name: "Beta", value: 20 } }
// } else {
//   console.log("No match found.");
// }

