const display=document.getElementById('display')

function mul(){
    if(display.value !=""){
        display.value +="*"
    }
}
function sub(){
    if(display.value !=""){
        display.value +="-"
    }
}
function add(){
    if(display.value !=""){
        display.value +="+"
    }
}
function div(){
    if(display.value!=""){
        display.value+="/"
    }
}
function nine(){
    display.value +=9
}
function eight(){
    display.value+=8
}function seven(){
    display.value+=7
}function six(){
    display.value+=6
}function five(){
    display.value+=5
}function four(){
    display.value+=4
}function three(){
    display.value+=3
}function two(){
    display.value+=2
}
function one(){
    display.value+=1
}
function zero(){
    display.value +=0
}
function back(){
    display.value = display.value.substr(0,display.value.length-1)
}
function clearAll(){
    display.value=""
}
function equal(){
    display.value = eval(display.value)
}