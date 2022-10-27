// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
    document.addEventListener('click', (event) => {
        if (event.target.id === 'horn-select') {
            let horn = document.getElementById('horn-select').value;
            let image = document.querySelector('img');
            let audio = document.querySelector('audio');
            if (horn === 'air-horn') {
                image.src = './assets/images/air-horn.svg';
                audio.src = './assets/audio/air-horn.mp3';
            } 
            else if (horn === 'car-horn') {
                image.src = './assets/images/car-horn.svg';
                audio.src = './assets/audio/car-horn.mp3';
            } 
            else if (horn === 'party-horn') {
                image.src = './assets/images/party-horn.svg';
                audio.src = './assets/audio/party-horn.mp3';
            }
        }
    false});
    
    const jsConfetti = new JSConfetti();
    document.addEventListener('click', (event) => {
        if (event.target === document.querySelector('button')) {
            let audio = document.querySelector('audio');
            let volume = document.getElementById('volume').value;
            if (volume >= 1) {
                audio.play();
            }
            // play animation
            if (document.getElementById('horn-select').value === 'party-horn') {
                jsConfetti.addConfetti();
            }
        }
    false});

    document.addEventListener('input', (event) => {
        if (event.target.id === 'volume') {
            let volume = document.getElementById('volume').value;
            let audio = document.querySelector('audio');
            audio.volume = (volume / 100.0);
            let volumeImage = document.querySelector('img[alt="Volume level 2"]');
            if (volume >= 67) {
                volumeImage.src = './assets/icons/volume-level-3.svg';
            }
            else if (volume >= 33) {
                volumeImage.src = './assets/icons/volume-level-2.svg';
            }
            else if (volume >= 1) {
                volumeImage.src = './assets/icons/volume-level-1.svg';
            }
            else {
                volumeImage.src = './assets/icons/volume-level-0.svg';
            }
        }
    false});
}