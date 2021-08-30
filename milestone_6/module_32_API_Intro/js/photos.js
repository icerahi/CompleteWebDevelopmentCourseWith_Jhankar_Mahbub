
const loadPhotos = async()=>{
    await fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))

}
loadPhotos()

const displayPhotos=(photos)=>{
    const photoSection = document.getElementById('photos')
    photos.forEach(photo => {
        const div = document.createElement('div')
        div.classList.add('photo')
        div.innerHTML =`<img src=${photo.url} /> <p>${photo.title}</p>` 
        photoSection.appendChild(div)
    });
}