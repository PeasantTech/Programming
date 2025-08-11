const searchValInput = document.getElementById("search-value-input");
const searchKeyInput = document.getElementById("search-key-input");
const keyValSearch = document.getElementById("key-value-search");
const objIDSearch = document.getElementById("object-id-search");
const keyValBtn = document.getElementById("key-value-search-button");
const objIDBtn = document.getElementById("object-id-search-button");
const submitBtn = document.getElementById("submit-button");

let objectData = null;

async function getData() {
  const url = "http://127.0.0.1:3000/HTML/JSONManip/JSON/Objects.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    objectData = await response.json();
    console.log(objectData);
  } catch (error) {
    console.error(error.message);
  }
}

const findObject = (key, value, parent) => {
    for (const objKey in parent) {
        if (parent[objKey][key] === value) {
            parent[objKey];
        }
    }
    return null;
};

const searchObject = () => {
    const searchVal = searchValInput.value;
    const searchKey = searchKeyInput.value;
    const result = findObject(searchKey, searchVal, objectData);
    console.log("result", result);
    
    // console.log(searchValInput, searchValInput.value, searchVal);
    // console.log("searchKey", searchKey);
    // console.log("searchVal", searchVal);
}

const displayKeyVal = () => {keyValSearch.classList.remove("hide"); objIDSearch.classList.add("hide")};
const displayObjId = () => {keyValSearch.classList.add("hide"); objIDSearch.classList.remove("hide")};

keyValBtn.addEventListener("click", displayKeyVal);
objIDBtn.addEventListener("click", displayObjId);

submitBtn.addEventListener("click", searchObject);
window.addEventListener("load", getData);