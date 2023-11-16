document.addEventListener("DOMContentLoaded", function () {
    // Set initial opacity to 0
    document.body.style.opacity = 0;

    setTimeout(function () {
        const colors = ["red", "green", "blue", "yellow"];
        const soundArray = [];
        let userIndex = 0;
        let userCanClick = false;
        let score = 0;

        function enableUserClick() {
            userCanClick = true;
        }

        function disableUserClick() {
            userCanClick = false;
        }

        function increaseScore() {
            score++;
            document.getElementById("score").textContent = `score: ${score}`;
        }

        document.addEventListener("click", function (event) {
            if (!userCanClick) {
                return;
            }

            const userClick = event.target;
            const clickedColor = userClick.id;

            if (clickedColor === soundArray[userIndex]) {
                userClick.style.boxShadow = "2px 2px 7px 5px black";
                const audio = userClick.querySelector("audio");
                audio.play();
                setTimeout(function () {
                    userClick.style.boxShadow = "1px 1px 5px 2px #e6dedd";
                }, 1300);
                userIndex++;
                if (userIndex === soundArray.length) {
                    disableUserClick();
                    setTimeout(function () {
                        const randomColor = colors[Math.floor(Math.random() * colors.length)];
                        soundArray.push(randomColor);
                        userIndex = 0;
                        playNextColor(0);
                        enableUserClick();
                        increaseScore();
                    }, 1000);
                }
            } else {
                const gameOverAudio = new Audio("sounds/game-over.wav");
                gameOverAudio.play();
                alert("Game Over!");
                if (userClick.id === "quit") {
                    window.location.href = "index.html";
                } else {
                    window.location.href = "game.html";
                }
            }
        });

        function playNextColor(index) {
            if (index < soundArray.length) {
                setTimeout(function () {
                    const color = soundArray[index];
                    const box = document.getElementById(color);
                    const audio = box.querySelector("audio");

                    box.style.boxShadow = "2px 2px 7px 5px black";

                    audio.play();

                    setTimeout(function () {
                        box.style.boxShadow = "1px 1px 5px 2px #e6dedd";
                        playNextColor(index + 1);
                    }, 1300);
                }, 1000);
            }
        }

        const boxes = document.querySelectorAll(".box");

        // Gradually increase opacity
        document.body.style.transition = "opacity 2s";
        document.body.style.opacity = 1;

        // Start the game after a delay
        setTimeout(function () {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            soundArray.push(randomColor);
            userIndex = 0;
            playNextColor(0);
            enableUserClick();
        });
    }, 1000)
});
