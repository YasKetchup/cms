function addWorkCard() {
  const template = document.querySelector("#portfolio-card-template");
  const container = document.querySelector(".portfolio-content");
  var clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function main() {
  addWorkCard();
  addWorkCard();
  addWorkCard();
}

main();
