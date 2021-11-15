const count = 10;
const apiKey = '_Sg2mWoAFQ7FbA_De-n3tsqoh65ZQ47IloeYgMrCCbI';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log('data', data);
  } catch (err) {
    console.log(err);
  }
};

getPhotos();
