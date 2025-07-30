const images = ['楽天トラベル.png', '複写_サマーセール.png', '複写_リクルート.png'];
let currentIndex = 0;

const sliderImage = document.getElementById('sliderImage');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateImage() {
  sliderImage.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

updateImage(); // 初期表示