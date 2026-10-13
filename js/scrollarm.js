const rightHand = document.querySelector('.right-hand');
const spacer = document.querySelector('.spacer');
const maxTranslateY = 33; // Maximum translateY percentage (changed to 20%)
const maxRotate = 6; // Reduced rotation value
const maxTranslateX = 4; // Maximum horizontal translation value (changed to 10 pixels)
const transitionDuration = 0.4; // Duration of the transition in seconds
let isTranslationSet = false;

const updateTranslation = () => {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight));
    const translateYPercentage = Math.min(scrollPercentage * maxTranslateY, maxTranslateY);
    const rotateValue = maxRotate * scrollPercentage;
    const translateX = maxTranslateX * scrollPercentage;

    rightHand.style.transition = `transform ${transitionDuration}s ease`;
    rightHand.style.transform = `translate(${translateX}%, ${translateYPercentage}%) rotate(${rotateValue}deg)`;
};

// Intersection Observer for setting initial state
const observerOptions = {
    threshold: 0.5,
};

const intersectionCallback = (entries, observer) => {
    const isVisible = entries[0].isIntersecting;

    if (isVisible && !isTranslationSet) {
        requestAnimationFrame(() => {
            updateTranslation();
            isTranslationSet = true;
        });
    } else if (!isVisible && isTranslationSet) {
        // Reset when spacer goes out of the viewport
        rightHand.style.transition = `transform ${transitionDuration}s ease`;
        rightHand.style.transform = `translate(0px, 0%) rotate(0deg)`;
        isTranslationSet = false;
    }
};

const observer = new IntersectionObserver(intersectionCallback, observerOptions);

if (spacer) {
    observer.observe(spacer);
}

// Event listener for the scroll event
window.addEventListener('scroll', () => {
    if (isTranslationSet) {
        updateTranslation();
    }
});