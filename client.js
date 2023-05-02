/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/

console.log('Step 0 complete! client.js loaded!');
console.log('this is the right file');
// Write your code here!

// 1. Start with the number 29 and set that equal to a variable named ‘highScore’;
let highScore = 29;
console.log('the current high score is 29 ');
// 2. Make a new empty array called myScrabbleTiles.
let myScrabbleTiles = [];
// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/

myScrabbleTiles.push(
  { tile: 'N', score: 1 },
  { tile: 'K', score: 5 },
  { tile: 'Z', score: 10 },
  { tile: 'X', score: 8 },
  { tile: 'D', score: 2 },
  { tile: 'A', score: 1 },
);
console.log(myScrabbleTiles);
// 4. Remove the last tile from myScrabbleTiles.

myScrabbleTiles.pop();
// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/
myScrabbleTiles.push(
  { tile: 'F', score: 4 }
);

//console.log(myScrabbleTiles);
// 6. Complete this function. It needs to be given an array of tile objects. 
//The function will use a for-loop and return the sum of all the scores in the given array.
function sumTiles(tilesArray) {
  let sum = 0;
  for (let i = 0; i < tilesArray.length; i += 1) {
    sum += tilesArray[i].score;

    //temp = tilesArray[i];

    // sum = 
    //sum = ()
    //sum += tilesArray[i]
  }

  return sum;

}

// 7. Use the function above to get the total score for myScrabbleTiles and 
//assign the value to a variable called "myScore".

let myScore = sumTiles(myScrabbleTiles);
console.log(`my score is  ${myScore}`);


// 8. Check whether or not your score is higher than the highScore.
// 8.1 If your score is higher, change highScore to the new high score.

if(myScore > highScore){
  highScore = 30;
} else {
  console.log('try again')
}
console.log(`the high score is now  ${highScore} `) //when using bling you gotta use the ticks

// DONE!