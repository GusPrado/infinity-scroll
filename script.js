const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
const count = 10;
const apiKey = '_Sg2mWoAFQ7FbA_De-n3tsqoh65ZQ47IloeYgMrCCbI';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let photosColletion = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

const imageLoaded = () => {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
};

const setAttributes = (element, attributes) => {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

const displayPhotos = () => {
  imagesLoaded = 0;
  totalImages = photosColletion.length;
  photosColletion.forEach((photo) => {
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.description,
      title: photo.description,
    });
    img.addEventListener('load', imageLoaded);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl);
    photosColletion = await response.json();
    displayPhotos();
  } catch (err) {
    console.log(err);
  }
};

window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
