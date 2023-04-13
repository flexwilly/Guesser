'use strict';

//select an element by ist calss and use.textContent to get the text of the element
// console.log(document.querySelector('.message').textContent);

// //set content of the elements
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //input field
// //getting the value from an input field use .value property
// document.querySelector('.guess').value = 223;
// console.log(document.querySelector('.guess').value);

//click events using an event listener
//i.e an event is anything that happens on the page

//1.select where the event cccurs
//first argument is the type of event
//second argument is the function
//function only called after event happens

//define the secret number:
//we define it once we start the application
//no between 0-20 with no decimal points

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//state variable
let score = 20;

let highscore = 0;

//function to handle all the messages
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //values are normally string so we convert it to Number
  //we assign it to guess because we will use it to compare values
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('No Number !');
  } // When player wins
  else if (guess === secretNumber) {
    //     document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    //display the secret number when the user wins
    document.querySelector('.number').textContent = secretNumber;

    //manipulate the css using .style.property always sets the value as a string
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //the current score becomes the high scoore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When guess is different from the secretNumber
  else if (guess !== secretNumber) {
    if (score > 1) {
      //       document.querySelector('.message').textContent =
      //         guess > secretNumber ? 'Too High!' : 'Too Low!';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      //reduce score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //       document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//restore the initial values
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing.....');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
