import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");

const createMarkupElement = ({ preview, original, description }) => {
  return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"

    />
  </a>`;
};

const createGallary = (galleryItems, callback) => {
  return galleryItems.map((el) => callback(el)).join("");
};

galleryRef.insertAdjacentHTML(
  "beforeend",
  createGallary(galleryItems, createMarkupElement)
);

const hendleClick = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.curre;
  event.preventDefault();
  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
  });
};

galleryRef.addEventListener("click", hendleClick);
