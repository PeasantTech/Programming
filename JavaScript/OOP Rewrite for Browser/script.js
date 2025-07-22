// let max = 20;
// let min = 1;
// const randVal = Math.floor(Math.random() * (max - min + 1) + min);
// console.log (randVal);
//createBingoCard();

const bingoTiles = document.getElementsByClassName("bingo-tile");
const generateCardButton = document.getElementById("generate-card-button");

generateCardButton.addEventListener("click", createBingoCard);

function createBingoCard (){
    let allTiles = [];

    allTiles.push(...generateFiveVals(1,15));
    allTiles.push(...generateFiveVals(16,30));
    allTiles.push(...generateFiveVals(31,45));
    allTiles.push(...generateFiveVals(46,60));
    allTiles.push(...generateFiveVals(61,75));

    console.log(allTiles);

    placeIntoTiles(allTiles);

}

function generateFiveVals (min, max) {
    let genArr = [];
    for (let i = 0; i < 5; i++){
        const randVal = Math.floor(Math.random() * (max - min + 1) + min);
        genArr[i] = randVal;
    }
    return genArr;
}

function placeIntoTiles (tilesArr) {
    for(let i = 0; i < 25; i++) {
        bingoTiles[i].innerHTML = tilesArr[i+5];
        console.log(i);
    }
    console.log("click");
}