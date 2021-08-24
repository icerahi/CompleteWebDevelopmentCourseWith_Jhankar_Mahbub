document.getElementById('add_border').addEventListener('click',function(){
    document.getElementById('friend_container').style.border="1px solid steelblue"
})

function addBackground(){
    const friends = document.getElementsByClassName('friend')
    console.log(friends);
    for(const friend of friends){
        friend.style.backgroundColor="skyblue"
    }
}

document.getElementById('add_friend').addEventListener('click',function(){
    const friends = document.getElementById('friend_container')
    const friendDiv = document.createElement('div')
    friendDiv.classList.add('friend')
    friendDiv.innerHTML=`<h3 class="friend-name">friend- new</h3>
    <p>Quas, similique?</p>`
    friends.appendChild(friendDiv)
})