// Main JavaScript for the website
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (currentPage === linkPage) {
      link.classList.add("active");
    }
  });

  // Animate elements when they come into view
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".product-card, .mission-box, .affiliation-logo"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add("animate__animated", "animate__fadeInUp");
      }
    });
  };

  // Run once on page load
  animateOnScroll();

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll);
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Wait for the HTML document to fully load before running the code
//   if (typeof gsap === "undefined") {
//     // Check if GSAP library is not loaded and log an error
//     console.error(
//       'GSAP library is not loaded. Please include GSAP via CDN: <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>'
//     );
//     return; // Exit if GSAP is not available
//   }

//   const logos = document.querySelectorAll(".affiliation-logo img");
//   // Select all image elements inside elements with class 'affiliation-logo'
//   if (logos.length === 0) {
//     // Check if any logos were found, log error if none
//     console.error(
//       "No logos found. Ensure your HTML has images with class .affiliation-logo img"
//     );
//     return; // Exit if no logos are found
//   }

//   console.log(`Found ${logos.length} logos to animate`); // Log number of logos found for debugging
//   const tl = gsap.timeline({ repeat: -1 });
//   // Create a GSAP timeline that repeats indefinitely (-1) with no pause between repeats
//   logos.forEach((logo, index) => {
//     // Loop through each logo image, with 'index' tracking the position in the loop
//     tl.fromTo(
//       logo,
//       // Start the animation for the current logo
//       { x: "-100vw", opacity: 0 },
//       // Initial state: logo is off-screen to the left (-100vw) and fully transparent
//       { x: "0", opacity: 1, duration: 3, ease: "power1.out" },
//       // Move to original position (x: 0), fully opaque, over 3 seconds for slow movement, with smooth easing
//       index * 1.2 // Start each logo's animation 1.2s after the previous one to ensure a clear gap
//     )
//       .to(
//         logo,
//         { x: "100vw", opacity: 0, duration: 3, ease: "power1.in" },
//         // Move logo off-screen to the right (100vw) and fade out over 3 seconds
//         index * 1.2 + 2.5 // Start moving out 2.5s after the logo starts moving in to maintain spacing
//       )
//       .set(
//         logo,
//         { x: "-100vw", opacity: 0 },
//         // Reset logo to initial off-screen left position immediately after exiting
//         index * 1.2 + 5.5 // Reset at 5.5s (3s in + 2.5s pause) after animation starts
//       )
//       .to(
//         logo,
//         { x: "0", opacity: 1, duration: 3, ease: "power1.out" },
//         // Move logo back to center, ready for next cycle
//         index * 1.2 + 5.5 // Start re-entering at the same time as reset
//       )
//       .to(
//         logo,
//         { x: "100vw", opacity: 0, duration: 3, ease: "power1.in" },
//         // Move logo off-screen again to continue the loop
//         index * 1.2 + 8 // Start exiting 2.5s after re-entering
//       );
//   });
// });
