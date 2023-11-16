document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.querySelector("i");
    playButton.addEventListener("click", function() {
        const gameBeginAudio = new Audio("sounds/game-begin.wav");
        gameBeginAudio.play();

        // Fade out the current page over 2 seconds
        document.body.style.transition = "opacity 4s";
        document.body.style.opacity = 0;

        // Navigate to game.html after a delay
        setTimeout(function() {
            window.location.href = "game.html";
        }, 2000);
    });
});
