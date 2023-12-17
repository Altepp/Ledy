let files = document.getElementById("file-input");
let importbtn = document.getElementById("import-song");

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

window.onload = () => {
    document.getElementById("test-song").onclick = playtest
}
