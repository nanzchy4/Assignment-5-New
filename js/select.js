function getPlayerName(nameId){
    const player = document.getElementById(nameId);
    const playerName = player.innerText;
    return playerName;
}
// function updatePlayerList(memberId, playerName){
//     const selectPlayer = document.getElementById(memberId);
//     selectPlayer.innerText = playerName;
// }

function updatePlayerList(playerName){
        const newElement = document.createElement('li');
        newElement.innerText= playerName;
        const parentElement = document.getElementById('list-container');
        parentElement.appendChild(newElement);
    }
function disableButton(event){
    event.target.setAttribute('disabled', true);
    event.target.style.backgroundColor = "grey";
    
}

function lengthCheck(playerNo){
    const liElements = document.querySelectorAll('ol li');
    const liNumber = liElements.length;
    console.log(liNumber);
    if(liNumber ===5){
    alert("5 players Selected Already");
    return 0;
}
    else{
    const playerName = getPlayerName(playerNo)
    updatePlayerList(playerName);
}
}


// event handler start 
document.getElementById('select-1').addEventListener('click', function(event){
    
    const buttonDisableCheck = lengthCheck("player-1");
    if(buttonDisableCheck==0){
        return;
    }
    disableButton(event);

    
})
document.getElementById('select-2').addEventListener('click', function(event){
    // const playerName = getPlayerName('player-2')
    // updatePlayerList(playerName);
    // disableButton(event);
    // const buttonDisableCheck = lengthCheck(player-);

    const buttonDisableCheck = lengthCheck("player-2");
    if(buttonDisableCheck==0){
        return;
    }
    disableButton(event);

    
})
document.getElementById('select-3').addEventListener('click', function(event){
    // const playerName = getPlayerName('player-3')
    // updatePlayerList(playerName);
    // disableButton(event);
    // lengthCheck(player-);
    const buttonDisableCheck = lengthCheck("player-3");
    if(buttonDisableCheck==0){
        return;
    }
    disableButton(event);

})
document.getElementById('select-4').addEventListener('click', function(event){
    // const playerName = getPlayerName('player-4')
    // updatePlayerList(playerName);
    // disableButton(event);
    // lengthCheck(player-);
    const buttonDisableCheck = lengthCheck("player-4");
    if(buttonDisableCheck==0){
        return;
    }
    disableButton(event);

})
document.getElementById('select-5').addEventListener('click', function(event){
    // const playerName = getPlayerName('player-5')
    // updatePlayerList(playerName);
    // disableButton(event);
    // lengthCheck(player-);
    const buttonDisableCheck = lengthCheck("player-5");
    if(buttonDisableCheck==0){
        return;
    }
    disableButton(event);

})
document.getElementById('select-6').addEventListener('click', function(event){
    // const playerName = getPlayerName('player-6')
    // updatePlayerList(playerName);
    // disableButton(event);
    // lengthCheck(player-);
    const buttonDisableCheck = lengthCheck("player-6");
    if(buttonDisableCheck==0){
        return;
    }
    disableButton(event);

})
// function lengthCheck(){
//     const liElements = document.querySelectorAll('ol li');
//     const liNumber = liElements.length;
//     console.log(liNumber);
//     if(liNumber ===5){
//     alert("5 players Selected Already");
//     return 0;
// }
//     else{
//     const playerName = getPlayerName('player-1')
//     updatePlayerList(playerName);
// }
// }