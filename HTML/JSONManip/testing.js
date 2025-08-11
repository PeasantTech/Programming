// const fs = require('fs');
// let fileText = fs.readFileSync('http://127.0.0.1:3000/HTML/JSONManip/JSON/Objects.json');
// let objectData = JSON.parse(fileText);

const url = "http://127.0.0.1:3000/HTML/JSONManip/JSON/Objects.json";
const objectData = await fetch(url);


const searchKey = "Name";
const searchVal = document.getElementById("name-input");
const submitBtn = document.getElementById("submit-button");

const findObject = (key, value, parent) => {
    for (const objKey in parent) {
        if (parent[objKey][key] === value) {
            return parent[objKey];
        }
    }
    return null;
};

const searchObject = () => {
    const result = findObject(searchKey, searchVal, objectData);
    console.log(result);
}

//submitBtn.addEventListener("click", searchObject);


const logToConsole = () => {
    console.log("click!");
}

submitBtn.addEventListener("click", logToConsole);