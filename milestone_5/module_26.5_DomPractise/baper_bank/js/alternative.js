document.getElementById("deposit_btn").addEventListener("click", function () {
  ChangeBalance("deposit");
});
document.getElementById("withdraw_btn").addEventListener("click", function () {
  ChangeBalance("withdraw");
});

function ChangeBalance(type) {
  //get input value
  const newAmount = document.getElementById(`${type}_input`);
  const amount = parseFloat(newAmount.value);
  newAmount.value = "";

  if (amount > 0) {
    // type of total
    const getTotal = document.getElementById(`total_${type}`);
    const total = parseFloat(getTotal.innerText);

    // update balance
    const getBalance = document.getElementById("total_balance");
    const balance = parseFloat(getBalance.innerText);

    if (type == "withdraw") {
      if (balance > amount) {
        getTotal.innerText = total + amount;
        getBalance.innerText = balance - amount;
      } else {
        alert("Your balance is lower than your withdraw amount!!");
      }
    } else {
      getTotal.innerText = total + amount;
      getBalance.innerText = balance + amount;
    }
  } else {
    alert("Amount must be a positive number");
  }
}
