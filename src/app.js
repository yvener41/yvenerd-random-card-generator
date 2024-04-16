/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suit = ["♦", "♥", "♠", "♣"];
  let value = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  function generateRandomSuit() {
    return suit[Math.floor(Math.random() * suit.length)];
  }

  function generateRandomValue() {
    return value[Math.floor(Math.random() * value.length)];
  }

  let randomSuit = generateRandomValue();
  let randomValue = generateRandomSuit();

  document.querySelector(".card").innerHTML =
    randomValue + randomSuit + randomValue;

  let cardValue = document.querySelector(".card");
  cardValue.innerHTML = `${randomValue} ${randomSuit} ${randomValue}`;

  if (randomSuit == "♥" || randomSuit == "♠") {
    cardValue.style.color = "red";
  }

  console.log(`${randomValue} ${randomSuit} ${randomValue}`);
};
