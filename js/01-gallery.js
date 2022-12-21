import { galleryItems } from './gallery-items.js'

console.log(galleryItems)
 // Change code below this line

const gallery = document.querySelector('.gallery')
const galleryEl = []

galleryItems.forEach(element => {
	const galleryItem = document.createElement('div')
	galleryItem.className = 'gallery--item'
	const galleryOriginal = document.createElement('a')
    galleryOriginal.className = 'gallery--original';
    galleryOriginal.href = element.original;
    const galleryImage = document.createElement('img');
    galleryImage.className = 'gallery__image';
    galleryImage.src = element.preview;
    galleryImage.setAttribute('data-source', element.original);
    galleryImage.alt = element.description;

    galleryItem.append(galleryOriginal);
    galleryOriginal.append(galleryImage);
    galleryEl .push(galleryItem);
})

gallery.append(...galleryEl );

gallery.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'img') {
        return;
	}

    const selectedImage = e.target.getAttribute('data-source');

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show();
    
    gallery.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
            instance.close();
		}
	})
})
