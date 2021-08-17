
function UpdateProductNumber(isIncrease,product,price) {
  const productInput = document.getElementById(`${product}_number`);
  let productNumber = parseInt(productInput.value);
  if (isIncrease) {
     productNumber +=1
  } 
  else if (productInput.value > 0) {
    productNumber -=1
  }
  productInput.value = productNumber;
  const productTotal = document.getElementById(`${product}_total`)
  productTotal.innerText = productNumber * price;
  //calculate total
  calculateTotal(price);
}

function getInputValue(product){
    const productInput = document.getElementById(product+'_number')
    const productNumber = parseInt(productInput.value)
    return productNumber
}

function calculateTotal(price){
    const phoneTotal = getInputValue('phone') * price;
    const caseTotal  = getInputValue('case') *price;
    const subtotal = phoneTotal + caseTotal
    const tax   = subtotal /10;
    const total = subtotal + tax
    //update on html of subtotal
    document.getElementById('subtotal').innerText = subtotal
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}
// case increase decrease events handle
document.getElementById("case_plus").addEventListener("click", function () {
  // const caseInput = document.getElementById('case_number');
  // const caseNumber = parseInt(caseInput.value)
  // caseInput.value = caseNumber+1
  UpdateProductNumber(true,"case",59);
});

document.getElementById("case_minus").addEventListener("click", function () {
  // const caseInput = document.getElementById('case_number');
  // const caseNumber = parseInt(caseInput.value)
  // caseInput.value = caseNumber-1
   UpdateProductNumber(false,'case',59);
});

// phone icrease decrease events handle
document.getElementById("phone_plus").addEventListener("click", function () {
   UpdateProductNumber(true,'phone',1219);
});

document.getElementById("phone_minus").addEventListener("click", function () {
   UpdateProductNumber(false,'phone',1219);
});


