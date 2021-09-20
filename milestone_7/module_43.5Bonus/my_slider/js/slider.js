const images =[
    './images/1.jpeg',
    './images/2.jpeg',
    './images/3.jpeg',
    './images/4.jpeg',
    './images/5.jpeg',
    './images/6.jpeg',
]
let imgIndex=0;
const imgElement= document.getElementById('slider_img')
setInterval(()=>{
    if(imgIndex>=images.length){
        imgIndex=0;
    }
    imgElement.setAttribute('src',images[imgIndex])
    imgIndex++
},1000)