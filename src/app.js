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
    "A",
  ];

  let generateRandomSuit = () => Math.floor(Math.random() * suit.length);
  let generateRandomValue = () => Math.floor(Math.random() * value.length);

  function cardSuit() {
    let randomSuit = suit[generateRandomSuit()];

    if (randomSuit === "♥" || randomSuit === "♦") {
      let redSuit = `<div class="drawn-suit" style="color:red">${randomSuit}</div>`;
      return redSuit;
    } else {
      let blacksuit = `<div class="drawn-suit">${randomSuit}</div>`;
      return blacksuit;
    }
  }

  function cardValue() {
    let randomValue = value[generateRandomValue()];
    return randomValue;
  }

  function displayCard() {
    let suit = cardSuit();
    let value = cardValue();

    document.querySelector(".top").innerHTML = suit;
    document.querySelector(".number").innerHTML = value;
    document.querySelector(".bottom").innerHTML = suit;
  }

  displayCard();
};
