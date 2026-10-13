const nav = document.querySelector(".page-header nav");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

// Check if the scroll-container and scrollbar elements exist
const scrollContainer = document.querySelector(".scroll-container");
const scrollbar = document.querySelector(".custom-scrollbar");

// Check if scrollContainer is not null
if (scrollContainer !== null && scrollbar !== null) {
  // Check the initial scroll position
  if (scrollContainer.scrollTop === 0) {
    scrollbar.style.display = "block";
  }

  scrollContainer.addEventListener("scroll", () => {
    const currentScroll = scrollContainer.scrollTop;

    if (currentScroll === 0) {
      // At the top of the scroll container
      nav.classList.remove(scrollUp, scrollDown);
      scrollbar.style.display = "block"; // Ensure scrollbar is visible at the top
    } else if (currentScroll > lastScroll) {
      // Scrolling down
      nav.classList.remove(scrollUp);
      nav.classList.add(scrollDown);
      scrollbar.style.display = "block";
    } else {
      // Scrolling up
      nav.classList.remove(scrollDown);
      nav.classList.add(scrollUp);
      scrollbar.style.display = "block";
    }

    lastScroll = currentScroll;
  });
}
