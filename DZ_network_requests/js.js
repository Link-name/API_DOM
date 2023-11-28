/* // Замените YOUR_ACCESS_KEY на ваш API-ключ Unsplash
const accessKey = 'yIkbLPIcuixtfTh_RUjkMHU328kX_aHrkO1ePX0x5YQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;

let imageData;

// Функция для загрузки нового случайного изображения
async function loadNewImage() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    imageData = data;
    updateImage();
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

// Функция для обновления элементов на странице с новыми данными
function updateImage() {
  const imageElement = document.getElementById('unsplashImage');
  const photographerNameElement = document.getElementById('photographerName');

  imageElement.src = imageData.urls.regular;
  photographerNameElement.textContent = `Photographer: ${imageData.user.name}`;
}

// Функция для переключения стиля кнопки "лайк"
function toggleLike() {
  const likeButton = document.getElementById('likeButton');
  likeButton.classList.toggle('liked');
}

// Загрузка первого изображения при загрузке страницы
window.onload = loadNewImage;
 */
const accessKey = 'yIkbLPIcuixtfTh_RUjkMHU328kX_aHrkO1ePX0x5YQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;

let imageData;
let likeCount = 0;

async function loadNewImage() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    imageData = data;
    updateImage();
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

function updateImage() {
  const imageElement = document.getElementById('unsplashImage');
  const photographerNameElement = document.getElementById('photographerName');
  const likeCountElement = document.getElementById('likeCount');

  imageElement.src = imageData.urls.regular;
  photographerNameElement.textContent = `Photographer: ${imageData.user.name}`;
  likeCountElement.textContent = `Likes: ${likeCount}`;
}

function toggleLike() {
  const likeButton = document.getElementById('likeButton');
  const likeCountElement = document.getElementById('likeCount');

  likeCount += likeButton.classList.contains('liked') ? -1 : 1;
  likeButton.classList.toggle('liked');
  likeCountElement.textContent = `Likes: ${likeCount}`;
}

window.onload = loadNewImage;
