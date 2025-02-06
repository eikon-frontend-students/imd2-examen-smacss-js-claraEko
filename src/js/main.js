var titleBackgrounClick = document.querySelector(".l-head");
var titleClick = document.querySelector(".head-First-title");
var cardRedClick = document.querySelector(".l-card-red");
var cardBlueClick = document.querySelector(".l-card-blue");
var cards = document.querySelector(".l-card-red,.l-card-green,.l-card-blue");

function clickOnTitle() {
  titleClick.classList.toggle("is-active");
  titleBackgrounClick.classList.toggle("is-active");
}
titleClick.addEventListener("click", clickOnTitle);

function clickOnCardRed() {
  cardRedClick.classList.toggle("is-active");
}
cardRedClick.addEventListener("click", clickOnCardRed);

function clickOnCard() {
  cardBlueClick.classList.toggle("is-active");
}
cardBlueClick.addEventListener("click", clickOnCard);

function showCard() {
  cards.classList.toggle("is-active");
}
cards.forEach(function (card) {
  console.log(cards);
  card.addEventListener("click", showCard);
});
