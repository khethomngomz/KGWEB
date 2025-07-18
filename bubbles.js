function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  const size = Math.random() * 40 + 10 + "px";
  bubble.style.width = size;
  bubble.style.height = size;
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.animationDuration = Math.random() * 10 + 10 + "s";
  bubble.style.opacity = Math.random();

  document.getElementById("bubbles-container").appendChild(bubble);

  // Pop after float
  setTimeout(() => {
    bubble.remove();
  }, 20000);
}

// Launch bubbles at intervals
setInterval(createBubble, 500);

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("bubbles-container");
  for (let i = 0; i < 5; i++) {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    container.appendChild(bubble);
  }
});
