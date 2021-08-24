const section_title = document.getElementsByClassName('section-title')
for(const title of section_title){
    title.style.color="red";
}

document.getElementById('players').style.backgroundColor="rgba(0,1,1, 0.05)"


document.getElementById('add').addEventListener('click',function(event){
    const list = document.getElementById('list')
    const li = document.createElement('li')
    li.innerText= "Arifin Shuvo" + Math.round(Math.random()*5)
    list.appendChild(li)
})

document.getElementById('increase').addEventListener('click',function(event){
    const input=document.getElementById('input')
 
    const inputValue = parseInt(input.value)+1
    if (inputValue > 5){
        event.target.setAttribute('disabled',true)
    }
    else{
        input.value = inputValue

    }
    
})