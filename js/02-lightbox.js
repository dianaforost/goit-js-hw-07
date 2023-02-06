import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}
gallery.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));
const lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
console.log(galleryItems);
