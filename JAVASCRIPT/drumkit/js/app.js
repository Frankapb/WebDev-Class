let audioItems = document.querySelectorAll('audio')
console.log(audioItems);

function playAudio(key) {
    audioItems.forEach(audio=>{
        let audio_key = audio.getAttribute('data-key')
        if(audio_key == key){
            audio.play();
        }
    })
}


playAudio('76')

document.querySelectorAll('.key').forEach(btn=>{
    // console.log(btn);
    let audioKey = btn.getAttribute('data-key')
    btn.addEventListener('click',function(e){
        console.log(e.target.parentElement);
        playAudio(audioKey)
    })
})
