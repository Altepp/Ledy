import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'

let wavesurfer = null


export function playtest() {
    if (wavesurfer) {
        if (wavesurfer.isPlaying()) {
            wavesurfer.pause()

        } else {
            wavesurfer.play()

        }
    }
}

export function setSong(url) {

    if (wavesurfer) {
        wavesurfer.destroy()
        wavesurfer = null
    }

    wavesurfer = WaveSurfer.create({
        container: '#audio-graph',
        waveColor: '#CCC',
        progressColor: '#FFF',
        url: url,
    })

}

window.playtest = playtest
window.setSong = setSong