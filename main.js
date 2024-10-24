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
