       const Startgame = document.getElementById("Start-Game");
        Startgame.addEventListener("click", () => {
            const category = document.getElementById("Category").value;
            if (category === "Open this select menu") {
                alert("Please select a category to start the game.");
                return;
            }
            localStorage.setItem("Category", category);
            window.location.href = "game.html";
        });