let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let player = {
  name: "Taehyung",
  chips: 145,
};

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;
function getRandomCard() {
  let randomNum = Math.trunc(Math.random() * 13) + 1;
  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11;
  }
  return randomNum;
}
function startGame() {
  isAlive = true;
  let num1 = getRandomCard();
  let num2 = getRandomCard();
  cards = [num1, num2];
  sum = num1 + num2;
  renderGame();
}
function renderGame() {
  cardsEl.textContent = "Cards:";
  for (let i = 0; i <= cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "sum:" + sum;

  if (sum <= 20) {
    message = "do you want to draw a new card?";
  } else if (sum === 21) {
    message = "woho you got BlackJack";
    hasBlackJack = true;
  } else {
    message = "Nah-ahh you are out";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
