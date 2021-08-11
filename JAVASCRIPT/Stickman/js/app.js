mcGregor = document.querySelector('.mcgregor')


function walkTheLine() {
    mcGregor.classList.add('walk-of-fame');
    //delayed function, after 4 seconds
    setTimeout(() => {
        mcGregor.classList.remove('walk-of-fame')
        mcGregor.classList.add('walk-of-shame')
    },8000)
}

mcGregor.addEventListener('click', function() {
    walkTheLine()
    mcGregor.classList.remove('walk-of-shame')
})