// user accessibility: right clicking
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

//user accessibility: drag and dropping
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    images.forEach(img => img.setAttribute("draggable", "false"));
});

//user accessibility: user-select
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("*").forEach(function(element) {
        element.style.userSelect = "none";
        element.style.webkitUserSelect = "none";
        element.style.mozUserSelect = "none";
        element.style.msUserSelect = "none";
    });
});

//user accessibility: screen sniping
document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'S' && event.metaKey) {
        document.querySelectorAll("*").forEach(function(element) {
            element.style.display = "hidden";
        });
    }
});

//music player

const musicTxt = document.getElementById("music-txt");
const audio = document.getElementById("audio");
let isPlaying = false;

musicTxt.addEventListener("click", () => {
    if (!isPlaying) {
        musicTxt.innerHTML = "<b>◼ Art Deco - Lana Del Rey</b>";
        audio.play();
    } else {
        musicTxt.innerHTML = "<b>▶ Art Deco - Lana Del Rey</b>";
        audio.pause();
        audio.currentTime = 0;
    }
    isPlaying = !isPlaying;
});
