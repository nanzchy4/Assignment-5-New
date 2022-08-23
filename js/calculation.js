// calculate button handler 
document.getElementById('calc').addEventListener('click', function(){
   
    const singlePlayerCost = getInputValue('unitCost');

    const playerExpensesElement = document.getElementById('playerCost');
    
    const topFiveElements = document.querySelectorAll('ol li');
    const playerNumber = topFiveElements.length;

    const updatedPlayerExpense = singlePlayerCost * playerNumber;
    playerExpensesElement.innerText = updatedPlayerExpense;

})
// total calculate button handler
document.getElementById('totalCalc').addEventListener('click', function(){
    const playerExpensesElement = document.getElementById('playerCost');
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseFloat(playerExpensesString);

    const managerExpenses = getInputValue('manager');
    const coachExpenses = getInputValue('coach');  
    
    const totalExpense = playerExpenses + managerExpenses + coachExpenses;

    const totalExpenseElement = document.getElementById('finalCost');
    totalExpenseElement.innerText = totalExpense;
})