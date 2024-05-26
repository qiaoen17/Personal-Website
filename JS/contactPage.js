// Function to perform typing animation
function typingAnimation() {
    const textToType = "Hello, I'm Available!"
    let index = 0;

    function typeText() {
        const text = document.getElementById('typing-animation');

        if (index < textToType.length) {
            text.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeText, 150); //Adjust the typing speed here 
        }

    }

    // Call function
    typeText();
}

// call function when document is ready
document.addEventListener('DOMContentLoaded', typingAnimation);

let currentPosition = 0;

function moveBackground() {
    currentPosition++;
    document.body.style.backgroundPosition = currentPosition + 'px 0';
    requestAnimationFrame(moveBackground);
}

window.onload = function() {
    moveBackground();
}
  