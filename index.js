function addWorkCard(params = {}) {
  const template = document.querySelector("#portfolio-card-template");
  const container = document.querySelector(".portfolio-content");

  template.content.querySelector(".portfolio-card-title").textContent =
    params.title;
  template.content.querySelector(".portfolio-card-description").textContent =
    params.description;
  template.content.querySelector(".portfolio-card-img").src = params.image;
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function main() {
  addWorkCard({
    title: "Project 1",
    description: "Description of Project 1",
    image:
      "https://i.pinimg.com/736x/49/0e/af/490eafcde12cf7634ff8cf33241a318f.jpg",
  });
  addWorkCard({
    title: "Project 2",
    description: "Description of Project 2",
    image:
      "https://i.pinimg.com/736x/b4/39/83/b439835f0d72eb89cf65b881298e4d27.jpg",
  });
  addWorkCard({
    title: "Project 3",
    description: "Description of Project 3",
    image:
      "https://i.pinimg.com/736x/b6/14/4f/b6144f3d3dc2d3f353f5c6972b90b64b.jpg",
  });
}

main();
