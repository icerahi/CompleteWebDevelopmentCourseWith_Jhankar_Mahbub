
console.log(intro_text.innerText);

document.getElementById('buynow_btn').addEventListener('click',function(event){
    const intro_text=document.getElementById('intro_text')
    intro_text.innerText = "I AM PENGUIN"
})