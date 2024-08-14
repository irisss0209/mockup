const revealImages = document.querySelectorAll('.reveal-image');
const windowHeight = window.innerHeight;

function reveal() {
    revealImages.forEach(image => {
        const revealTop = image.getBoundingClientRect().top;
        const revealPoint = windowHeight - image.clientHeight / 2;

        if (revealTop < revealPoint) {
            image.style.opacity = '1';
        } else {
            image.style.opacity = '0';
        }
    });
}

window.addEventListener('scroll', reveal);

// Initial reveal check
reveal();


