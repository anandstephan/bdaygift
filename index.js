let currentSlide = 0;
let currentMessage = 0;
const slides = document.querySelectorAll(".slide");
const messages = [
  "Happy Birthday! 🌟 You look absolutely fabulous today—your elegance and charm remind me of Kareena Kapoor's iconic grace. Here’s to a day as stunning and wonderful as you are, Bebo-style! 🎉💖",
  "Happy Birthday! 🌟 You’re radiating such exquisite beauty today—it’s like you’ve taken a page from Katrina Kaif’s style book. Here’s to a day as dazzling and special as you are! 🎉💫 Happy Birthday! 🌟 You’re radiating such exquisite beauty today—it’s like you’ve taken a page from Katrina Kaif’s style book. Here’s to a day as dazzling and special as you are! 🎉💫 ",
  "Happy Birthday! 🌟 Today, you’re radiating a beauty and sophistication that rivals Emma Watson's. May your day be filled with the same magic and wonder that you bring to everyone around you. Have a truly extraordinary birthday!",
];
const messageElement = document.querySelector(".birthday-message");

// Function to change the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none"; // Show only the current slide
  });
}

// Function to change the current message
function changeMessage(index) {
  messageElement.textContent = messages[index];
}

// Auto-slider and message changer every 1 second
setInterval(() => {
  // Increment the slide index
  currentSlide = (currentSlide + 1) % slides.length;
  // Increment the message index
  currentMessage = (currentMessage + 1) % messages.length;

  // Show the next slide
  showSlide(currentSlide);
  // Change the message
  changeMessage(currentMessage);
}, 5000);

// Show the first slide initially
showSlide(currentSlide);
changeMessage(currentMessage);
