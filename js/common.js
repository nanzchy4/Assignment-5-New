function getPlayerName(nameId){
    const player = document.getElementById(nameId);
    const playerName = player.innerText;
    return playerName;
}
function updatePlayerList(playerName){
    const newElement = document.createElement('li');
    newElement.innerText= playerName;
    newElement.style.padding='10px';
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
    if(liNumber ===5){
    alert("5 players Selected Already");
    return 0;
}
    else{
    const playerName = getPlayerName(playerNo)
    updatePlayerList(playerName);
}
}

// calcuation js common function

function getInputValue(Id){

    const inputFieldElement = document.getElementById(Id);
    const inputFieldString = inputFieldElement.value;

    if(isNaN(inputFieldString)){
        alert('Please Enter a number type value');
        inputFieldElement.value='';
        return;
    }
    else{
    const inputFieldValue = parseFloat(inputFieldString);

    return inputFieldValue;
}
}