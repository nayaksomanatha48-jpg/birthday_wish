const container = document.getElementById("container");
const gift = document.getElementById("gift");
const music = document.getElementById("birthdayMusic");


// 🎁 Gift Click
gift.addEventListener("click", function () {

    // Start music
    music.play();

    // Confetti
    createConfetti();

    let count = 3;

    container.innerHTML = `
        <div class="countdown">
            <h1 id="count">3</h1>
            <p>Get ready, Sriya! 🎁</p>
        </div>
    `;

    const countElement = document.getElementById("count");

    const timer = setInterval(function () {

        count--;

        if (count > 0) {
            countElement.textContent = count;
        } 
        else {
            clearInterval(timer);
            showBirthday();
        }

    }, 1000);
});


// 🎉 Birthday Screen
function showBirthday() {

    container.innerHTML = `

        <div class="surprise">

            <div class="balloons">
                🎈 🎈 🎈
            </div>

            <img src="sriya.jpg" class="sister-photo">

            <h1>
                🎉 Happy Birthday, Sriya! 🎉
            </h1>

            <h2>
                ❤️ My Amazing Sister ❤️
            </h2>

            <p>
                Wishing you a very happy birthday!
                <br><br>

                May your life always be filled with
                happiness, laughter and beautiful moments. ✨
            </p>

            <div class="cake">
                🎂
            </div>

            <button class="letter-btn" onclick="showLetter()">
                💌 Read Your Birthday Letter
            </button>

        </div>

    `;
}


// 💌 Birthday Letter
function showLetter() {

    container.innerHTML = `

        <div class="birthday-card">

            <div class="card-top">
                💌
            </div>

            <h1>
                For My Dear Sister, Sriya ❤️
            </h1>

            <div class="card-line"></div>

            <p class="letter">

                Dear Sriya,

                <br><br>

                Today is a very special day because it is
                the day we celebrate <b>you!</b> 🎂✨

                <br><br>

                I just want you to know how special you are
                to our family. Your smile, your kindness and
                all the little moments we share make life
                more beautiful.

                <br><br>

                I hope this new year of your life brings you
                lots of happiness, success, beautiful memories
                and everything you wish for. 🌸

                <br><br>

                Keep smiling, keep believing in yourself,
                and always remember that you have people
                who care about you and want to see you happy. ❤️

                <br><br>

                Once again...

                <br>

                <b>
                    🎉 HAPPY BIRTHDAY, SRIYA! 🎉
                </b>

                <br><br>

                With lots of love and best wishes,

                <br>

                <b>
                    Your Brother ❤️
                </b>

            </p>

            <div class="card-bottom">
                🎂 🎈 ✨ 🎁 ✨ 🎈 🎂
            </div>

            <button class="music-btn" onclick="toggleMusic()">
                🎵 Pause Music
            </button>

            <br>

            <button class="final-btn" onclick="showFinalSurprise()">
                ✨ One Last Surprise ✨
            </button>

        </div>

    `;
}


// 🎵 Music Play / Pause
function toggleMusic() {

    const button = document.querySelector(".music-btn");

    if (music.paused) {

        music.play();
        button.textContent = "🎵 Pause Music";

    } 
    else {

        music.pause();
        button.textContent = "▶️ Play Music";

    }
}


// ✨ Final Surprise
function showFinalSurprise() {

    createConfetti();

    container.innerHTML = `

        <div class="final-surprise">

            <div class="sparkles">
                ✨ ⭐ ✨
            </div>

            <div class="big-heart">
                ❤️
            </div>

            <h1>
                🎉 Happy Birthday, Sriya! 🎉
            </h1>

            <h2>
                You Are Truly Special ❤️
            </h2>

            <p>
                I hope this little surprise
                brought a big smile to your face. 😊
            </p>

            <p>
                May every day ahead bring you
                happiness, success, laughter
                and lots of beautiful moments. ✨
            </p>

            <div class="final-cake">
                🎂
            </div>

            <h3>
                Enjoy Your Special Day! 🎈
            </h3>

            <div class="final-emojis">
                🎁 🎈 🎉 ❤️ 🎉 🎈 🎁
            </div>

            <button class="music-btn final-music-btn"
                    onclick="toggleMusic()">
                🎵 Pause Music
            </button>

        </div>

    `;
}


// 🎊 Confetti
function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.backgroundColor =
            "hsl(" +
            Math.random() * 360 +
            ", 100%, 50%)";

        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(function () {
            confetti.remove();
        }, 4000);
    }
}