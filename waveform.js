window.onload = function(){
    let playPauseButton = document.getElementById('playPauseButton');
    let playIcon = document.getElementById('playIcon');
    let pauseIcon = document.getElementById('pauseIcon');

    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'grey',
        progressColor: 'cyan',
        barWidth: 2,
        height: 120
    });
    wavesurfer.load('./song.mp3');

    playPauseButton.addEventListener("click", () =>{
        wavesurfer.playPause();
        // Switch between triangle-play and pause buttons
        if(playIcon.style.display == "block"){
            pauseIcon.style.display = "block";
            playIcon.style.display = "none";
        }
        else{
            pauseIcon.style.display = "none";
            playIcon.style.display = "block";
        }
    });

    
}
