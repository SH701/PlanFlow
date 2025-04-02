const today = new Date();
const hours = today.getHours();
window.chosenImage = (hours >= 8 && hours <= 18) ? "Morning.png" : "Evening.png";
document.body.style.backgroundImage = `url('img/${window.chosenImage}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center center";
document.body.style.backgroundAttachment = "fixed";
