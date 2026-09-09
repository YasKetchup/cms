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
    image: "path/to/image1.jpg",
  });
  addWorkCard({
    title: "Project 2",
    description: "Description of Project 1",
    image: "path/to/image1.jpg",
  });
  addWorkCard({
    title: "Project 3",
    description: "Description of Project 1",
    image: "path/to/image1.jpg",
  });
}

main();
