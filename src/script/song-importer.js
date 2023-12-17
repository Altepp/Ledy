let files = document.getElementById("file-input");
let importbtn = document.getElementById("import-song");
let audio = document.getElementById("audio");

function importSong() {
    // Ouvre une boîte de dialogue de sélection de fichier
    const fileInput = document.getElementById("file-input");
    fileInput.click();


}


importbtn.addEventListener("click", importSong);


files.oninput = (ev) => {
    const songFileURL = URL.createObjectURL(files.files[0]);

    audio.src = songFileURL;
    audio.load();

    setSong(songFileURL)
}

let interval = ""

function play() {

    if (audio.paused || audio.ended) {
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