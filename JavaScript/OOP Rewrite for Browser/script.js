// let max = 20;
// let min = 1;
// const randVal = Math.floor(Math.random() * (max - min + 1) + min);
// console.log (randVal);
//createBingoCard();

const bingoTiles = document.getElementsByClassName("bingo-tile");
const generateCardButton = document.getElementById("generate-card-button");

generateCardButton.addEventListener("click", createBingoCard);
// generateCardButton.addEventListener("click", generateFiveVals(1,15));

function createBingoCard() {
    let allTiles = [];

    console.log(allTiles, "check 1");
    allTiles.push(...generateFiveVals(1, 15));
    allTiles.push(...generateFiveVals(16, 30));
    allTiles.push(...generateFiveVals(31, 45));
    allTiles.push(...generateFiveVals(46, 60));
    allTiles.push(...generateFiveVals(61, 75));

    console.log(allTiles);

    placeIntoTiles(allTiles);

}

function generateFiveVals(min, max) {
    let genArr = [];
    for (let i = 0; i < 5; i++) {
        let randVal = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(i, randVal);
        while (genArr.includes(randVal)) {
            randVal = Math.floor(Math.random() * (max - min + 1) + min);
            console.log("Check", i, randVal);
        }
        console.log(genArr);
        genArr[i] = randVal;
    };
    return genArr;
}


function placeIntoTiles(tilesArr) {
    let counter = 0;
    for (let i = 0; i < 5; i++) {
        bingoTiles[i].innerHTML = tilesArr[i*5];
    }
    // for (let j = 0; j < 25; j++) {
    //     bingoTiles[j].innerHTML = tilesArr[counter];
    //     console.log(j, tilesArr[counter]);
    //     counter++;
    // }
}
