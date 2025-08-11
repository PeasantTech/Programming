const fs = require('fs');

// Load and parse the JSON file
const rawData = fs.readFileSync('Objects.json');
const data = [JSON.parse(rawData)];

console.log(obj[targetKey] === targetValue);

// Define the key and value you're searching for
const targetKey = "Name";
const targetValue = "Pufferfish";

// Find all matching objects
const matches = data.filter(obj => obj[targetKey] === targetValue);

// Output results
console.log(`Found ${matches.length} matches:`);
console.log(matches);


