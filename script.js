const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const soundElements = {};

// Load audio elements
sounds.forEach(sound => {
    soundElements[sound] = new Audio(`sounds/${sound}.mp3`);
});

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        stopSounds();
        const soundId = button.id;
        if (soundElements[soundId]) {
            soundElements[soundId].play();
        }
    });
});

document.getElementById("stop").addEventListener("click", stopSounds);

function stopSounds() {
    sounds.forEach(sound => soundElements[sound].pause());
}
