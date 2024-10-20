const backgroundImages = ['morning.jpg', 'afternoon.jpg', 'evening.jpg', 'night.jpg'];

const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

const $$backgroundImage = document.createElement('img');

$$backgroundImage.src = `images/background/${randomImage}`;
$$backgroundImage.classList.add('bgImage');

document.body.appendChild($$backgroundImage)
console.dir($$backgroundImage)