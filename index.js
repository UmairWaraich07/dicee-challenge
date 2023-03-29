//generates random images by using array of images
let randomNumber1 = Math.floor (Math.random () * 6);
let arrayOfImages1 = [];
arrayOfImages1.push ('images/dice1.png');
arrayOfImages1.push ('images/dice2.png');
arrayOfImages1.push ('images/dice3.png');
arrayOfImages1.push ('images/dice4.png');
arrayOfImages1.push ('images/dice5.png');
arrayOfImages1.push ('images/dice6.png');
document.body.querySelector ('.img1').src = arrayOfImages1[randomNumber1];

//for second random number
let randomNumber2 = Math.floor (Math.random () * 6);
let arrayOfImages2 = [];
arrayOfImages2.push ('images/dice1.png');
arrayOfImages2.push ('images/dice2.png');
arrayOfImages2.push ('images/dice3.png');
arrayOfImages2.push ('images/dice4.png');
arrayOfImages2.push ('images/dice5.png');
arrayOfImages2.push ('images/dice6.png');
document.body.querySelector ('.img2').src = arrayOfImages2[randomNumber2];

if (randomNumber1 > randomNumber2) {
  document.body.firstElementChild.firstElementChild.innerHTML =
    '🚩Player 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
  document.body.firstElementChild.firstElementChild.textContent = `Player 2 Wins!🚩`;
} else {
  document.body.querySelector ('h1').textContent = 'Draw!';
}
