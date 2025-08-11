// let max = 20;
// let min = 1;
// const randVal = Math.floor(Math.random() * (max - min + 1) + min);
// console.log (randVal);
//createBingoCard();

const bingoTiles = document.getElementsByClassName("bingo-tile");
const genCardBtn = document.getElementById("generate-card-button");
const pullNumBtn = document.getElementById("pull-number-button")
let callList = []; let playGame = false;

// generateCardButton.addEventListener("click", generateFiveVals(1,15));
genCardBtn.addEventListener("click", createBingoCard);
pullNumBtn.addEventListener("click", rollTheDice);
bingoTiles.addEventListener("click", addMarker);

function createBingoCard() {
    callList = [];

    let allTiles = [];
    
    // console.log(allTiles, "check 1");
    allTiles.push(...generateFiveVals(1, 15));
    allTiles.push(...generateFiveVals(16, 30));
    allTiles.push(...generateFiveVals(31, 45));
    allTiles.push(...generateFiveVals(46, 60));
    allTiles.push(...generateFiveVals(61, 75));
    
    // console.log(allTiles);
    
    placeIntoTiles(allTiles);    
}

function generateFiveVals(min, max) {
    let genArr = [];
    for (let i = 0; i < 5; i++) {
        let randVal = Math.floor(Math.random() * (max - min + 1) + min);
        // console.log(i, randVal);
        while (genArr.includes(randVal)) {
            randVal = Math.floor(Math.random() * (max - min + 1) + min);
            // console.log("Check", i, randVal);
        }
        // console.log(genArr);
        genArr[i] = randVal;
    };
    return genArr;
}


function placeIntoTiles(tilesArr) {
    // let counter = 0;
    for (let i = 0; i < 5; i++) {
        // console.log(i,i*5)
        bingoTiles[i].innerHTML = tilesArr[i*5];
    }
    for (let i = 0; i < 5; i++) {
        // console.log(i+5,i*5+1)
        bingoTiles[i+5].innerHTML = tilesArr[i*5+1];
    }
    for (let i = 0; i < 5; i++) {
        // console.log(i+10,i*5+2)
        bingoTiles[i+10].innerHTML = tilesArr[i*5+2];
    }
    for (let i = 0; i < 5; i++) {
        // console.log(i+15,i*5+3)
        bingoTiles[i+15].innerHTML = tilesArr[i*5+3];
    }
    for (let i = 0; i < 5; i++) {
        // console.log(i+20,i*5+4)
        bingoTiles[i+20].innerHTML = tilesArr[i*5+4];
    }
}

function rollTheDice () {
    let bingoObject = {
        column : 'b',
        row : 1
    };
    
}

function addMarker () {
    document.th.className = "marked-tile";
}