const h2 =document.getElementsByTagName('h2')
for(const items of h2){
    items.style.color="red";
}

document.getElementById('backpack').style.backgroundColor='whitesmoke';

const cards = document.getElementsByClassName('card')
for(const card of cards){
    card.style.borderRadius ="30px"
}

const buyNowBtns= document.getElementsByClassName("ice-btn-buy-now")

for(const btn of buyNowBtns){
    btn.addEventListener('click',function(event){
        event.target.parentNode.removeChild(event.target)
    })
}

document.getElementById("email").addEventListener('keyup',function(event){
    const submitBtn =  document.getElementById('submitBtn')
    if (event.target.value == "email"){
       submitBtn.removeAttribute('disabled')
    }
    else{
        submitBtn.setAttribute('disabled',true)
    }
})


const images = document.getElementsByClassName('card-img-top')
for(const img of images){
    const main_img = img.src
    img.addEventListener('mouseover',function(event){
        event.target.src="./images/shoes/shoe-1.png"
    })
    img.addEventListener('mouseout',function(event){
        event.target.src=main_img
    })
}

const footer=document.getElementById('subscribe')
console.log(footer);
footer.addEventListener('dblclick',function(event){
    event.target.style.backgroundColor="white"
})
 