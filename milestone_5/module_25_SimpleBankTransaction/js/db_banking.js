
  const db={
    save:function(field,amount){
          return window.localStorage.setItem(field,amount)
    },
    delete:function(field){
        return window.localStorage.removeItem(field)
    },
    get:function(field){
        return window.localStorage.getItem(field)
    }
 
}
function showCurrent(){
    document.getElementById('total_deposit').innerText = db.get('deposit')
    document.getElementById('total_withdraw').innerText = db.get('withdraw')
    document.getElementById('total_balance').innerText = db.get('balance')
}

showCurrent()

function resetAll(){
    db.save('deposit',0)
    db.save('withdraw',0)
    db.save('balance',0)
    showCurrent();
}

function Bla(){
    console.log("bla bla working");
}
//handle deposite button event
document.getElementById('deposit_btn').addEventListener('click',function(event){
  //get the amount deposited
  const amount = document.getElementById('deposit_amount')
  const depositAmount = amount.value 
 

  //update deposit total
  const totalDeposit = document.getElementById('total_deposit')
  const lastDepositAmount = db.get('deposit')
   
  const newDepositTotal = parseFloat(lastDepositAmount) + parseFloat(depositAmount)
   totalDeposit.innerText = newDepositTotal;
  db.save('deposit',newDepositTotal)
 
  //clear the deposit input field
  amount.value = ""

  // update account balance
  const totalBalance = document.getElementById('total_balance')
  const lastBalance = db.get('balance') 
  const newBalance = parseFloat(lastBalance)+parseFloat(depositAmount)
   totalBalance.innerText = newBalance
    db.save('balance',newBalance)
 
})


// handle withdraw event handler
document.getElementById('withdraw_btn').addEventListener('click',function(event){
    //get withdraw amount
    const amount = document.getElementById('withdraw_amount')
    const withdrawAmount = amount.value 

    // update withdraw total
    const totalWithdraw = document.getElementById('total_withdraw')
    const lastWithdrawAmount =  totalWithdraw.innerText

    const newWithdrawTotal = parseFloat(lastWithdrawAmount)+parseFloat(withdrawAmount)
    totalWithdraw.innerText = newWithdrawTotal
    db.save('withdraw',newWithdrawTotal)

    //clear withdraw input field
    amount.value =""

    //update account balance
    const totalBalance =document.getElementById('total_balance')
    const lastBalance = totalBalance.innerText
    const newBalance = parseFloat(lastBalance)-parseFloat(withdrawAmount)
    totalBalance.innerText = newBalance
    db.save('balance',newBalance)

})
