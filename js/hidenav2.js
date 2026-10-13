const nav = document.querySelector(".page-header nav");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

// Check the initial scroll position
if (document.documentElement.scrollTop === 0) {
  const scrollbar = document.querySelector(".custom-scrollbar");
  if (scrollbar !== null) {
    scrollbar.style.display = "block";
  }
}

window.addEventListener("scroll", () => {
  const currentScroll = document.documentElement.scrollTop;

  if (currentScroll === 0) {
    // At the top of the page
    nav.classList.remove(scrollUp, scrollDown);
    const scrollbar = document.querySelector(".custom-scrollbar");
    if (scrollbar !== null) {
      scrollbar.style.display = "block"; // Ensure scrollbar is visible at the top
    }
  } else if (currentScroll > lastScroll) {
    // Scrolling down
    nav.classList.remove(scrollUp);
    nav.classList.add(scrollDown);
    const scrollbar = document.querySelector(".custom-scrollbar");
    if (scrollbar !== null) {
      scrollbar.style.display = "block";
    }
  } else {
    // Scrolling up
    nav.classList.remove(scrollDown);
    nav.classList.add(scrollUp);
    const scrollbar = document.querySelector(".custom-scrollbar");
    if (scrollbar !== null) {
      scrollbar.style.display = "block";
    }
  }

  lastScroll = currentScroll;
});
nav.style.backgroundColor = "#232323";