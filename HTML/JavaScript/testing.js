// let frfoods = ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"];
// let frcuisines = ["korean", "japanese", "japanese", "greek", "japanese", "korean"];
// let frratings = [9, 12, 8, 15, 14, 7];

// let foodRatingsArgs = [frfoods, frcuisines, frratings];
// const highestRatedArgs1 = ["korean"];
// const highestRatedArgs2 = ["japanese"];
// const changeRatingArgs1 = ["sushi", 16];
// const highestRatedArgs3 = ["japanese"];
// const changeRatingArgs2 = ["ramen", 16];
// const highestRatedArgs4 = ["japanese"];

// const FoodRatings = (foods, cuisines, ratings) => {
//     const foodObj = {};
//     for (const key of foods) {
//         foodObj[key] = {"cuisine":cuisines[foods.indexOf(key)], "rating":ratings[foods.indexOf(key)]};
//     }
//     return foodObj;
// }

// const changeRating = (food, newRating) => {
    
// }

// const highestRated = cuisine => {

// }

// FoodRatings(frfoods, frcuisines, frratings);
// highestRated(highestRatedArgs1);
// highestRated(highestRatedArgs2);
// changeRating(changeRatingArgs1[0], changeRatingArgs1[1]);
// highestRated(highestRatedArgs3);
// changeRating(changeRatingArgs2[0], changeRatingArgs2[1]);
// highestRated(highestRatedArgs4);


let diceValuesArr = [];
const rollDice = () => {
    
    let diceValuesArr = [];
    console.log(diceValuesArr);
  for (let i = 0; i < 5; i++){
    const randVal = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randVal);
    console.log(randVal);
  };
  console.log(diceValuesArr);
}
//   listOfAllDice.forEach((dice, index)=> {
//     dice.textContent = diceValuesArr[index];
//   });
// }

rollDice();
  console.log(diceValuesArr);
rollDice();
  console.log(diceValuesArr);
rollDice();
  console.log(diceValuesArr);
