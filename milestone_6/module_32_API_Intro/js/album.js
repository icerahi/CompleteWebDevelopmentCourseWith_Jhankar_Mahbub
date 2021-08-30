
const loadAlbums =async()=>{
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data =>displayAlbums(data))
}
const displayAlbums=(albums)=>{
    const albumsContainer = document.getElementById('albums')
    albums.forEach(album => {
        const div = document.createElement('div')
        div.classList.add('album')
        div.innerHTML=`<p> ${album.title}</p>`
        albumsContainer.appendChild(div)
    });
}
loadAlbums()