import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

const createMarkupElement = ({ preview, original, description }) => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`;
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
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"  alt="${event.target.alt}" >`,
    {
      onShow: () => {
        document.addEventListener("keydown", hendleKeydown);
      },
      onClose: () => {
        document.removeEventListener("keydown", hendleKeydown);
      },
    }
  );
  instance.show();

  function hendleKeydown(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
};

galleryRef.addEventListener("click", hendleClick);
