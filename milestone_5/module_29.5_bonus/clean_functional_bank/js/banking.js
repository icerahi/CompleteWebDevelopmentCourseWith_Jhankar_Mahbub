// getting input value by id name 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId)
    const value = parseFloat(inputField.value)
    inputField.value = ""
    return value;
}
// getting innerText value by idname 
function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId) 
    const value = parseFloat(fieldTag.innerText)
    return value
}
// updating all total innertext
function updateTotal(tagId,amount){
    const total = getInnerTextValue(tagId)  // getting innertext value
    document.getElementById(tagId).innerText = total + amount  // updating innertext value by id
    const deposit = getInnerTextValue('total_deposit')   //getting deposit total value
    const withdraw = getInnerTextValue('total_withdraw') //geting withdraw total value
    document.getElementById('total_balance').innerText = 1240+(deposit-withdraw) //updating total balance
 
}
document.getElementById('deposit_btn').addEventListener('click',function(){
    const amount = getInputValue('deposit_input')
    if(amount > 0){
        updateTotal('total_deposit',amount);
    }
})
document.getElementById('withdraw_btn').addEventListener('click',function(){
    const amount = getInputValue('withdraw_input')
    const balance = getInnerTextValue('total_balance')
    if(amount > 0 && balance >= amount){
        updateTotal('total_withdraw',amount);
    }
})