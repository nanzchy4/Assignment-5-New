// event handler start 
document.getElementById('select-1').addEventListener('click', function(event){
    
    const buttonDisableCheck = lengthCheck("player-1");
    if(buttonDisableCheck==0){
        return;
    }
    disableButton(event);    
    
})

document.getElementById('select-2').addEventListener('click', function(event){
    
    const buttonDisableCheck = lengthCheck("player-2");
    if(buttonDisableCheck==0){
        return;
    }
    disableButton(event);

})

document.getElementById('select-3').addEventListener('click', function(event){
    
    const buttonDisableCheck = lengthCheck("player-3");
    if(buttonDisableCheck==0){
        return;
    }
    disableButton(event);

})

document.getElementById('select-4').addEventListener('click', function(event){

    const buttonDisableCheck = lengthCheck("player-4");
    if(buttonDisableCheck==0){
        return;
    }
    disableButton(event);

})

document.getElementById('select-5').addEventListener('click', function(event){
    
    const buttonDisableCheck = lengthCheck("player-5");
    if(buttonDisableCheck==0){
        return;
    }
    disableButton(event);

})

document.getElementById('select-6').addEventListener('click', function(event){
   
    const buttonDisableCheck = lengthCheck("player-6");
    if(buttonDisableCheck==0){
        return;
    }
    disableButton(event);

})
