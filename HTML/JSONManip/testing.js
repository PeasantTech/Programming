const searchKeyInput = document.getElementById("search-key-input");
const searchValInput = document.getElementById("search-value-input");
const objIDInput = document.getElementById("object-id-input");
const keyValSearch = document.getElementById("key-value-search");
const objIDSearch = document.getElementById("object-id-search");
const keyValBtn = document.getElementById("key-value-search-button");
const objIDBtn = document.getElementById("object-id-search-button");
const submitBtn = document.getElementById("submit-button");

let objectData = null;
let KeyValSelect = 0;
let ObjIDSelect = 0;
let result = [];

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

const findObject = (key, value, object, parent) => {
  // console.log (key, value);
  if (KeyValSelect) {
    for (const objKey in parent) {
      if (parent[objKey][key] === value) {
        const resultLength = result.length;
        result[resultLength] = {[objKey] : parent[objKey]};
      } 
    }
    return result;
  }

  else if (ObjIDSelect) {
    return {[object] : parent[object]};
  }

  else {
    return null;
  }
};

const searchObject = () => {
  const searchKey = searchKeyInput.value;
  const searchVal = searchValInput.value;
  // const searchKey = "Name";
  // const searchVal = "Stone";
  const objectID = objIDInput.value;
  const result = findObject(searchKey, searchVal, objectID, objectData);
  console.log(result);

  // console.log(searchValInput, searchValInput.value, searchVal);
  // console.log("searchKey", searchKey);
  // console.log("searchVal", searchVal);
}

// const displayKeyVal = () => {
//   KeyValSelect = true; ObjIDSelect = false;

// };
  const displayKeyVal = () => { KeyValSelect = true; ObjIDSelect = false; keyValSearch.classList.remove("hide"); objIDSearch.classList.add("hide") };
// const displayObjId = () => {
//   KeyValSelect = false; ObjIDSelect = true;

// };
  const displayObjId = () => { KeyValSelect = false; ObjIDSelect = true; keyValSearch.classList.add("hide"); objIDSearch.classList.remove("hide") };



keyValBtn.addEventListener("click", displayKeyVal);
objIDBtn.addEventListener("click", displayObjId);

submitBtn.addEventListener("click", searchObject);

window.addEventListener("load", getData);

    // <div id="key-value-search" class="key-value-search hide">
    //     <input value="" type="text" id="search-key-input" class="object-name" placeholder="Key name">
    //     <input value="" type="text" id="search-value-input" class="object-name" placeholder="Value name">
    // </div>
    // <div id="object-id-search" class="object-id-search hide">
    //     <input value="" type="text" id="object-id-input" class="object-name" placeholder="Object ID">
    // </div>