document.addEventListener("DOMContentLoaded", function () {
  const bubblesContainer = document.getElementById("bubbles-container");
  const bubblesCount = 15;

  // Create bubbles
  for (let i = 0; i < bubblesCount; i++) {
    createBubble();
  }

  // Add popping effect on click
  bubblesContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("bubble")) {
      popBubble(e.target);
    }
  });

  // Auto-pop some bubbles randomly
  setInterval(function () {
    const bubbles = document.querySelectorAll(".bubble");
    if (bubbles.length > 0) {
      const randomBubble = bubbles[Math.floor(Math.random() * bubbles.length)];
      popBubble(randomBubble);
      // Replace popped bubble with a new one
      setTimeout(createBubble, 1000);
    }
  }, 3000);
});

function createBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";

  // Random size between 10px and 60px
  const size = Math.random() * 50 + 10;

  // Random position
  const posX = Math.random() * 100;

  // Random animation duration between 10s and 20s
  const duration = Math.random() * 10 + 10;

  // Random delay up to 5s
  const delay = Math.random() * 5;

  // Apply styles
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${posX}%`;
  bubble.style.animationDuration = `${duration}s`;
  bubble.style.animationDelay = `${delay}s`;

  // Random opacity
  bubble.style.opacity = Math.random() * 0.5 + 0.1;

  document.getElementById("bubbles-container").appendChild(bubble);

  // Remove bubble after animation completes
  setTimeout(() => {
    bubble.remove();
    createBubble(); // Create a new bubble to replace this one
  }, duration * 1000);
}

function popBubble(bubble) {
  bubble.classList.add("pop");
  setTimeout(() => {
    bubble.remove();
  }, 500);
}
