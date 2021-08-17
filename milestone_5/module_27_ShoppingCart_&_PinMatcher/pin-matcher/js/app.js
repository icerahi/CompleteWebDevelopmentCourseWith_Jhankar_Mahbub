
function getPin(){
    const pin = Math.round(Math.random()*10000)
    if((pin+'').length == 4){
        return pin 
    }
    else{
        return getPin();
    }
}
function generatePin(){
    document.getElementById('display_pin').value = getPin()
}

document.getElementById('keypad').addEventListener('click',function(event){
    const number=event.target.innerText
    const calcInput=document.getElementById('typed_numbers')

    if(isNaN(number)){
        if(number == "C"){
            // calcInput.value = calcInput.value.substr(0,calcInput.value.length-1)
            calcInput.value = ""
        }
    }
    else{
        calcInput.value+=number
    }
})

function verifyPin(){
    const pin = document.getElementById('display_pin').value 
    const typedNumber = document.getElementById('typed_numbers').value 
   
    const successMessage = document.getElementById('notify_success');
    const failMessage = document.getElementById('notify_fail');
    if(pin == typedNumber){
        successMessage.style.display="block";
        failMessage.style.display="none";
    }
    else{
        successMessage.style.display="none";
        failMessage.style.display="block";     

    }
}