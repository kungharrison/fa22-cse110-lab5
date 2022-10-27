// explore.js
    window.addEventListener('DOMContentLoaded', init);

function init() {
    // wait for voices to load
    window.speechSynthesis.onvoiceschanged = function() {
        let voices = speechSynthesis.getVoices();
        for (let i = 0; i < voices.length; i++) {
            let option = document.createElement('option');
            option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
            document.getElementById('voice-select').appendChild(option);
        }
    }
    
    // run text to speech when press to talk is pressed
    document.addEventListener('click', (event) => {
        if (event.target === document.querySelector('button')) {
            // get text from textarea
            let text = document.getElementById('text-to-speak').value;
            let utterance = new SpeechSynthesisUtterance(text);
            // change voice type
            let voice = document.getElementById('voice-select').value;
            let voices = speechSynthesis.getVoices();
            for (let i = 0; i < voices.length; i++) {
                if (voice === voices[i].name + ' (' + voices[i].lang + ')') {
                    speechSynthesis.cancel();
                    utterance = new SpeechSynthesisUtterance(document.getElementById('text-to-speak').value);
                    utterance.voice = voices[i];
                }
            }
            speechSynthesis.speak(utterance);
        }
    false});

    // change face image to talking face
    document.addEventListener('click', (event) => {
        if (event.target === document.querySelector('button')) {
            let image = document.querySelector('img');
            image.src = './assets/images/smiling-open.png';
        }
    false});

    // change face to normal face
    document.addEventListener('click', (event) => {
        if (event.target === document.querySelector('button')) {
            let image = document.querySelector('img');
            setTimeout(function() {
                image.src = './assets/images/smiling.png';
            }, 1000);
        }
    false});
}