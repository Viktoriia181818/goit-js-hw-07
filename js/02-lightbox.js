import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

(function createGalleryMarkup() {
  const elementCreateGallery = galleryItems
    .map(({ original, preview, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    `;
    })
    .join("");
  galleryEl.insertAdjacentHTML("beforeend", elementCreateGallery);
})();

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

// galleryItems.forEach(element => {
//     const galleryItem = document.createElement('div');
//     galleryItem.className = 'gallery__item';
//     const galleryOriginal = document.createElement('a');
//     galleryOriginal.className = 'gallery__link';
//     galleryOriginal.href = element.original;
//     const galleryImage = document.createElement('img');
//     galleryImage.className = 'gallery__image';
//     galleryImage.src = element.preview;
//     galleryImage.setAttribute('title', element.description);
//     galleryImage.alt = element.description;

//     galleryOriginal.append(galleryImage);
//     items.push(galleryOriginal);
// })

// gallery.append(...items);


// new SimpleLightbox('.gallery a', {
//     AnimationEffect: 250
// })
