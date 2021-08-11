let coin = document.querySelector('#oneEuro')
coin.addEventListener('click', function () {
    coin.classList.remove('heads')
    coin.classList.remove('tails')
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    console.log(result)
    setTimeout(function () {
        if (result=='heads') {
            coin.classList.add('heads')
        } else {
            coin.classList.add('tails')
        }
    }, 300)
})