// js start
function getInputValue(inputId) {
  const InputElement = document.getElementById(inputId); //get input value
  const amount = parseFloat(InputElement.value);
  InputElement.value = ""; // clear input value
  return amount;
}
function updateTotal(newAmount, updateId) {
  const totalElement = document.getElementById(updateId); // get total text
  const totalAmount = parseFloat(totalElement.innerText);
  totalElement.innerText = newAmount + totalAmount;
}
// function updateBalance(newAmount) {
//   const balanceElement = document.getElementById("total_balance"); //get balance text
//   const totalBalance = parseFloat(balanceElement.innerText);
//   balanceElement.innerText = totalBalance + newAmount;
// }
function getCurrentBalance() {
  const balanceElement = document.getElementById("total_balance");
  const totalBalance = parseFloat(balanceElement.innerText);
  return totalBalance;
}
document
  .getElementById("deposit_btn")
  .addEventListener("click", function (event) {
    const amount = getInputValue("deposit_input"); //get input value
    if (amount > 0) {
      updateTotal(amount, "total_deposit"); //get input value
      updateTotal(amount, "total_balance"); // update balance
    } else {
      alert("Amount must be a positive number");
    }
  });
document
  .getElementById("withdraw_btn")
  .addEventListener("click", function (event) {
    const amount = getInputValue("withdraw_input"); // get input value
    const balance = getCurrentBalance(); //get balance
    if (amount > 0) {
      if (balance > amount) {
        updateTotal(amount, "total_withdraw"); //update deposit
        updateTotal(-amount, "total_balance"); //update balance
      } else {
        alert("Your balance is lower than your withdraw amount!!");
      }
    } else {
      alert("Amount must be a positive number");
    }
  });
