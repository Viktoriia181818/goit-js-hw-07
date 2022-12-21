import { galleryItems } from './gallery-items.js';


console.log(galleryItems)
// Change code below this line

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
    galleryImage.setAttribute('data-source', element.original)
    galleryImage.alt = element.description;

    galleryItem.append(galleryOriginal);
    galleryOriginal.append(galleryImage);
    items.push(galleryItem);
})

gallery.append(...items);

gallery.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }

    const createGalleryMarkup = e.target.getAttribute('data-source');

    const instance = basiclightbox.create(`
    <img src="${createGalleryMarkup}" width="800" height="600">
`);

    instance.show()
    
    gallery.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            instance.close()
        }
    });
});
