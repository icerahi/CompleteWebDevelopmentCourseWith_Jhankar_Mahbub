//

function getInputValue(inputId){
    // debugger;
    const inputField = document.getElementById(inputId)
    const amountValue = parseFloat(inputField.value)
    //clear input field
    inputField.value = ""
    return amountValue;
}

function updateTotalField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId)
    const totalAmount = parseFloat(totalElement.innerText)
    totalElement.innerText = totalAmount + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('total_balance')
    const balanceTotalAmount =  parseFloat(balanceTotal.innerText)
    return balanceTotalAmount
}
function updateBalance(newAmount){
    const balanceTotal = document.getElementById('total_balance')
    // const balanceTotalAmount =  parseFloat(balanceTotal.innerText)
    const balanceTotalAmount = getCurrentBalance()
    balanceTotal.innerText = balanceTotalAmount + newAmount

}

document.getElementById('deposit_btn').addEventListener('click',function(event){
    // const depositInput = document.getElementById('deposit_input')
    // const newDeposit = parseFloat(depositInput.value)
    
    //get and update current deposit
    // const depositTotal = document.getElementById('total_deposit')
    // const depositTotalAmount = parseFloat(depositTotal.innerText)
    // depositTotal.innerText = depositTotalAmount + newDeposit;

    // update balance
    // const balanceTotal = document.getElementById("total_balance")
    // const balanceTotalAmount =  parseFloat(balanceTotal.innerText)
    // balanceTotal.innerText = balanceTotalAmount + newDeposit
    const newDeposit = getInputValue('deposit_input')

    if(newDeposit>0){
        updateTotalField('total_deposit',newDeposit)
        updateBalance(newDeposit);
    }
    else{
        alert("Deposit amount must be a positive amount")
    }
})

document.getElementById('withdraw_btn').addEventListener('click',function(event){
    // const withdrawInput = document.getElementById('withdraw_input')
    // const newWithdraw  = parseFloat(withdrawInput.value)
   
    //get and update withdraw
    // const withdrawTotal = document.getElementById('total_withdraw')
    // const withdrawTotalAmount = parseFloat(withdrawTotal.innerText)
    // withdrawTotal.innerText = withdrawTotalAmount + newWithdraw


    //update balance after withdraw
    // const balanceTotal = document.getElementById('total_balance')
    // const balanceTotalAmount = parseFloat(balanceTotal.innerText)
    // balanceTotal.innerText = balanceTotalAmount - newWithdraw
    // updateBalance(-newWithdraw);
    const withdrawAmount  = getInputValue('withdraw_input')
    const currentBalance = getCurrentBalance();
    
    if(withdrawAmount>0){
        if(withdrawAmount < currentBalance){
            updateTotalField('total_withdraw',withdrawAmount)
            updateBalance(-withdrawAmount);
        }
        else{
            alert("You haven't enought balance")
        }
        
    }
    else{
        alert("Withdraw amount must be a positive amount")
    }
 


})