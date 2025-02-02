const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        stopSounds();
        const sound = document.getElementById(`${button.id}-audio`);
        if (sound) {
            sound.play();
        }
    });
});

function stopSounds() {
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}
