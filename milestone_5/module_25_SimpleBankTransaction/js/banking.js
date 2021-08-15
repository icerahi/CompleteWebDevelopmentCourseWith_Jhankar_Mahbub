
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
  
  db.save('deposit',0)
  db.save('withdraw',0)
  db.save('balance',1240)
  
  //handle deposite button event
  document.getElementById('deposit_btn').addEventListener('click',function(event){
    //get the amount deposited
    const amount = document.getElementById('deposit_amount')
    const depositAmount = amount.value 
    // if (typeof depositAmount != 'number'){
    //     alert("Deposit amount should be number")
    //     return
    // }

    //update deposit total
    const totalDeposit = document.getElementById('total_deposit')
    const lastDepositAmount = totalDeposit.innerText
     
    const newDepositTotal = parseFloat(lastDepositAmount) + parseFloat(depositAmount)
    totalDeposit.innerText = newDepositTotal;
   
    //clear the deposit input field
    amount.value = ""

    // update account balance
    const totalBalance = document.getElementById('total_balance')
    const lastBalance = totalBalance.innerText 
    const newBalance = parseFloat(lastBalance)+parseFloat(depositAmount)
    totalBalance.innerText = newBalance
   
  })

  // handle withdraw event handler
  document.getElementById('withdraw_btn').addEventListener('click',function(event){
      //get withdraw amount
      const amount = document.getElementById('withdraw_amount')
      const withdrawAmount = amount.value 

      // update withdraw total
      const totalWithdraw = document.getElementById('total_withdraw')
      const lastWithdrawAmount = totalWithdraw.innerText

      const newWithdrawTotal = parseFloat(lastWithdrawAmount)+parseFloat(withdrawAmount)
      totalWithdraw.innerText = newWithdrawTotal
      //clear withdraw input field
      amount.value =""

      //update account balance
      const totalBalance =document.getElementById('total_balance')
      const lastBalance = totalBalance.innerText
      const newBalance = parseFloat(lastBalance)-parseFloat(withdrawAmount)
      totalBalance.innerText = newBalance;

  })
