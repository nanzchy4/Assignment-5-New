document.getElementById('calc').addEventListener('click', function(){
   
    const inputFieldElement = document.getElementById('unitCost');
    const inputFieldString = inputFieldElement.value;
    const inputFieldValue = parseFloat(inputFieldString);

    const playerExpensesElement = document.getElementById('playerCost');
    
    const topFiveElements = document.querySelectorAll('ol li');
    const playerNumber = topFiveElements.length;


    const updatedPlayerExpense = inputFieldValue * playerNumber;
    playerExpensesElement.innerText = updatedPlayerExpense;

})

function staffExpense(staffId){

    const staffExpensesElement = document.getElementById(staffId);
    const staffExpensesString = staffExpensesElement.value;
    const staffExpenses = parseFloat(staffExpensesString);
    return staffExpenses;

}

document.getElementById('totalCalc').addEventListener('click', function(){
    const playerExpensesElement = document.getElementById('playerCost');
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseFloat(playerExpensesString);

    const managerExpenses = staffExpense('manager');
    const coachExpenses = staffExpense('coach');  
    
    const totalExpense = playerExpenses + managerExpenses + coachExpenses;

    const totalExpenseElement = document.getElementById('finalCost');
    totalExpenseElement.innerText = totalExpense;
})