function makeRed(){
    document.body.style.backgroundColor="red";
}


// handle blue button click by setting function name
const blue = document.getElementById('make_blue');
blue.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='blue'
}

//handle event using anonynmus 
const green = document.getElementById('make_green');
//anonymus function
green.onclick = function (){
    document.body.style.backgroundColor='green';
}


//handle by using add eventlistener
const orange = document.getElementById('make_orange');
orange.addEventListener('click',makeOrange)
function makeOrange(){
    document.body.style.backgroundColor='orange'
}

//addEventListener
const hotPink = document.getElementById('make_hotpink');
hotPink.addEventListener('click',function(){
    document.body.style.backgroundColor='hotpink'

})

//direct shortcut 
document.getElementById('make_lightblue').addEventListener('click',function(){
    document.body.style.backgroundColor='lightblue'
})