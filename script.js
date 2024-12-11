const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const card = document.querySelector(".neumorphic-card");
const buttonContainer = document.getElementById("button-container");
const cardTitle = document.getElementById("card-title");
const cardImage = document.getElementById("card-image");
const prankSound = document.getElementById("prank-sound");

let imagesURL = [
  "https://wallpapers.com/images/high/dani-daniels-in-bare-chest-iex5y04m7tdzb2b3.webp",
  "https://wallpapers.com/images/high/surprised-mia-khalifa-photo-mmr7u8j9t127d2f9.webp",
];

// Set a random image URL on page load
cardImage.src = imagesURL[Math.floor(Math.random() * imagesURL.length)];

yesButton.addEventListener("click", () => {
  // Hide the title and buttons
  cardTitle.style.display = "none";
  buttonContainer.style.display = "none";

  // Show the image
  cardImage.classList.remove("hidden");

  // Play the sound
  prankSound.play();
});

noButton.addEventListener("click", (e) => {
  alert("LUND");
});

noButton.addEventListener("mouseover", () => {
  const cardRect = card.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  // Calculate random positions within the card
  const maxX = cardRect.width - buttonRect.width - 20; // Add padding
  const maxY = cardRect.height - buttonRect.height - 20; // Add padding
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Update NO button's position
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});
