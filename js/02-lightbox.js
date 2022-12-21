import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(element => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery__item';
    const galleryOriginal = document.createElement('a');
    galleryOriginal.className = 'gallery__link';
    galleryOriginal.href = element.original;
    const galleryImage = document.createElement('img');
    galleryImage.className = 'gallery__image';
    galleryImage.src = element.preview;
    galleryImage.setAttribute('title', element.description);
    galleryImage.alt = element.description;

    galleryOriginal.append(galleryImage);
    items.push(galleryOriginal);
})

gallery.append(...items);


new SimpleLightbox('.gallery a', {
    captionDelay: 200
})
