function addWorkCard(params = {}) {
  const template = document.querySelector("#portfolio-card-template");
  const container = document.querySelector(".portfolio-content");

  template.content.querySelector(".portfolio-card-title").textContent =
    params.title;
  template.content.querySelector(".portfolio-card-description").textContent =
    params.description;
  template.content.querySelector(".portfolio-card-img").src = params.image;
  template.content.querySelector(".portfolio-card-link").href = params.link;
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/k5bipqoissh0/environments/master/entries?access_token=b8ZmCwCU7cykq_pZo4WJ6qkh9Za4E1CXw7m7U52tqIk&content_type=work",
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        const imageId = item.fields.imagen.sys.id;
        const imageAsset = data.includes.Asset.find(
          (asset) => asset.sys.id === imageId,
        );
        item.fields.imagen = imageAsset.fields.file.url;

        return {
          title: item.fields.titulo,
          description: item.fields.descripcion,
          link: item.fields.url,
          image: item.fields.imagen,
        };
      });
      return fieldsCollection;
    });
}

function main() {
  getWorks().then((works) => {
    for (const w of works) {
      addWorkCard(w);
    }
  });
}

main();

//https://cdn.contentful.com/spaces/k5bipqoissh0/environments/master/entries?access_token=b8ZmCwCU7cykq_pZo4WJ6qkh9Za4E1CXw7m7U52tqIk&content_type=work//
