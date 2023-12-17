
function importSong() {
    // Ouvre une boîte de dialogue de sélection de fichier
    const fileInput = document.getElementById("file-input");
    fileInput.click();


}
const files = document.getElementById("file-input");


document.getElementById("import-song").addEventListener("click", importSong);
const audio = document.getElementById("audio");


files.oninput = (ev) => {
    const songFileURL = URL.createObjectURL(files.files[0]);

    audio.src = songFileURL;
    audio.load();

    setSong(songFileURL)
}

let interval = ""

function play() {
    //audio.play();

    console.log(audio.paused)

    if (audio.paused || audio.ended) {
        console.log("ltt shit")
        audio.play();

        interval = setInterval(() => {
            audio.pause();
            audio.currentTime = 0;
            clearInterval(interval)

        }, 10000)


    } else {
        audio.pause();
        audio.currentTime = 0;
        clearInterval(interval)
    }
}



document.getElementById("test-song").addEventListener("click", play);