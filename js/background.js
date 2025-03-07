const images = ["Morning.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.classList.add("background-image");
document.body.style.backgroundImage = `url('img/${chosenImage}')`;