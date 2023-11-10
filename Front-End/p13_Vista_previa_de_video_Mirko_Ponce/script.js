console.log("page loaded...");

function playVideo(element) {
    element.play();
    // var video_tag = document.querySelector(".mainVideo");
    // console.log(`Este es el tag seleccionado: ${video_tag}`);
}

function pauseVideo(element) {
    element.pause();
    element.currentTime = 0;
}