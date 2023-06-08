// // left dice
// var randomNumber1 = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber1);

// let leftImg = document.querySelector(".img1");

// leftImg.setAttribute("src", `./images/dice${randomNumber1}.png`);

// // right dice

// var randomNumber2 = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber2);

// let rightImg = document.querySelector(".img2");

// rightImg.setAttribute("src", `./images/dice${randomNumber2}.png`);

// // heading tag
// let heading = document.querySelector("h1");
// if (randomNumber1 > randomNumber2) {
//   heading.innerHTML = "Player1 Wins";
// } else if (randomNumber1 < randomNumber2) {
//   heading.innerHTML = "Player2 Wins";
// } else if ((randomNumber1 = randomNumber2)) {
//   heading.innerHTML = "Draw!";
// }




// Generate random numbers for the left and right dice
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

// Set the source attribute of the left and right dice images
document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

// Update the heading based on the dice values
var heading = document.querySelector("h1");
heading.innerHTML = randomNumber1 > randomNumber2 ? "🚩Player1 Wins" : randomNumber1 < randomNumber2 ? " 🚩Player2 Wins" : "Draw!";
