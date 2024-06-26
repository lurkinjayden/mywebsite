let transitionActive = false;
var song = document.getElementById("song"); 

function startPage() {
    const enterButton = document.getElementById("enter-container");
    enterButton.style.transition = "opacity 1s ease-in-out";
    enterButton.style.opacity = 0;

    setTimeout(() => {
        setTimeout(() => {
            const mainButtons = document.getElementById("main-container");
            mainButtons.style.display = "flex";

            requestAnimationFrame(() => {
                mainButtons.style.transition = "opacity 1s ease-in-out";
                mainButtons.style.opacity = 1;
            });

            enterButton.style.display = "none";
        }, 500);
    }, 1000);
    
    song.volume = 0;
    song.playbackRate = 0.85;
    song.play();

    var fadeInInterval = setInterval(function () {
        song.volume += 0.1;
        if (song.volume >= 0.7) {
            song.volume = 0.7;
            clearInterval(fadeInInterval);
        }
    }, 350);

    setTimeout(startHome, 1000);
};

function startHome() {
    if (transitionActive) return;
    transitionActive = true;

    const displayText = document.querySelector(".display-text");
    displayText.style.opacity = 0;

    setTimeout(() => {
        displayText.textContent = getRandomSentence();
        displayText.style.opacity = 1;
        transitionActive = false;
    }, 2000);
}

function startAbout() {
    if (transitionActive) return;
    transitionActive = true;

    const displayText = document.querySelector(".display-text");
    displayText.style.opacity = 0;

    setTimeout(() => {
        displayText.innerHTML = "This website is owned by lurkin and doll. Contacts are <a href='https://discord.com/users/1200110462482780190' target='_blank' style='color: white;'>flights</a> or <a href='https://discord.com/users/1197572641528238080' target='_blank' style='color: white;'>valexnt</a> on Discord.";
        displayText.style.opacity = 1;
        transitionActive = false;
    }, 2000);
}




function getRandomSentence() {
    const sentences = [
        "It's worth wondering if sin even carries the same weight anymore. Are nefarious actions against a demonic and upside¬down world still punishable? And if so, are they punished a little less? The way I see it, sins are only sins when unleashed upon a world that doesn't deserve it — a world that you don't want to see hurt — better known as the previous world. To have disgraced the world when it was at its most beautiful was worthy of ample Helltime. But now, when the world is so ugly and itself unclean, how can you consider action against it as sin? I would go as far to claim that any action meant to collapse this place sooner, effectively making way for new life, would be considered holy — maybe even ordainable by a kind of state-aware papacy."
    ];
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

var gifs = [
    "alakazam.gif",
    "arceus.gif",
    "articuno.gif",
    "charizard.gif",
    "darkrai.gif",
    "dialga.gif",
    "dragonite.gif",
    "entei.gif",
    "garchomp.gif",
    "gardevoir.gif",
    "genesect.gif",
    "gengar.gif",
    "giratina.gif",
    "groudon.gif",
    "ho-oh.gif",
    "kyogre.gif",
    "kyurem.gif",
    "lugia.gif",
    "mewtwo.gif",
    "moltres.gif",
    "palkia.gif",
    "raikou.gif",
    "rayquaza.gif",
    "reshiram.gif",
    "scizor.gif",
    "suicune.gif",
    "tyranitar.gif",
    "venusaur.gif",
    "zapdos.gif",
    "zekrom.gif"
    ];

function setRandomGif() {
    var randomIndex = Math.floor(Math.random() * gifs.length);
    var randomGif = gifs[randomIndex];
    document.getElementById("random-gif").src = "" + randomGif;

    document.body.setAttribute("data-current-gif", randomGif);

    updateButtonHoverColor();
}

setRandomGif();

function updateButtonHoverColor() {
    var currentGif = document.body.getAttribute("data-current-gif");
    var buttons = document.querySelectorAll(".buttons-container button");

    buttons.forEach(function(button) {
        button.setAttribute("data-gif", currentGif);
    });
}

