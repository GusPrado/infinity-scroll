const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photosColletion = [];

const count = 10;
const apiKey = '_Sg2mWoAFQ7FbA_De-n3tsqoh65ZQ47IloeYgMrCCbI';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const setAttributes = (element, attributes) => {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

const displayPhotos = () => {
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
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl);
    photosColletion = await response.json();
    console.log(photosColletion);
    displayPhotos();
  } catch (err) {
    console.log(err);
  }
};

getPhotos();
