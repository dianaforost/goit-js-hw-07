import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
function createMarkup() {
  const itemMarkup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-sourse="${original}" alt="${description}"></a></div>`
    )
    .join("");

  gallery.insertAdjacentHTML("afterbegin", itemMarkup);
}
createMarkup();

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const originalImage = event.target.dataset.sourse;

  const instance = basicLightbox.create(`
  <img src="${originalImage}" width="1280" height="auto" />
  `);

  instance.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});
console.log(galleryItems);
