const nameInput = document.getElementById("name");

function storeCardsInQueryString(cards) {
  var encoded = [];

  for (var i = 0; i < cards.length; i++) {
    encoded.push(cards[i]);
  }

  return "?" + encoded.join("&");
}

nameInput.addEventListener("change", () => {
  const cards = [];
  cards.push(nameInput.value);
  const resultUrl = storeCardsInQueryString(cards);
  history.pushState(null, "", resultUrl);
});

window.addEventListener("load", () => {
  const name = window.location.href.split("?")[1];
  //* spilit %20 is for space
  nameInput.value = name.split("%20");
});
