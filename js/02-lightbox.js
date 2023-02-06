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
const lightbox = new SimpleLightbox(".gallery .gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
console.log(galleryItems);
