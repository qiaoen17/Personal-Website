let currentPosition = 0;

function moveBackground() {
    currentPosition++;
    document.getElementById('grid').style.backgroundPosition = currentPosition + 'px 0';
    requestAnimationFrame(moveBackground);
}

window.onload = function() {
    moveBackground();
}