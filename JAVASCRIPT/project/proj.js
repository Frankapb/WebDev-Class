
// User story & specifications

/*
    when the user clicks on the button FLIP IT
        - coin flips (animation)
        -  capture form content of user (0 or 1 == 'heads' or 'tails')
        -  Generate random number in between 0-1 
        -  if random number is 1 {
            addClass: animate-flipheads
        }else {
            addClass: animate-fliptails
        }
        -  If UserSelection !== randomNum => User loses 
            else => User wins



*/
// If one of the buttons with class btn is clicked


// Bot selection heads or tails
function botSelection() {
    let randomNumber = Math.floor(Math.random() * 2) +1;
    return randomNumber;

}


let randomNumber = botSelection()




//User selecting heads or tails


function userSelection() {
    let tails = document.getElementById('tails');
    let heads = document.getElementById('heads');

    tails.addEventListener("click",() => {
        tails.classList.add('selected-btn');
        heads.classList.remove('selected-btn')
        return UserPick = 1
    })

    heads.addEventListener("click",() => {
        heads.classList.add('selected-btn');
        tails.classList.remove('selected-btn')
        return UserPick = 2

    })

}

let UserPick = userSelection()


// Who is the winner


function checkWinner(a,b) {
    document.getElementById('side-b').classList.add('animate-fliptails')
    document.getElementById('side-a').classList.add('animate-flipheads')



    winner_msg = "You won !"
    loser_msg = "You lost :-("
    
    setTimeout(function() {
       
        res = document.getElementById('result')
        if (a == b) {
            return res.innerHTML = winner_msg
        }else {
            return res.innerHTML = loser_msg
        }
    
        if(randomNumber == 1) {
            document.getElementById('side-a').style.display = 'none'
        }else {
            document.getElementById('side-b').style.display = 'none'
        }
    }, 5000)
    
    

}



