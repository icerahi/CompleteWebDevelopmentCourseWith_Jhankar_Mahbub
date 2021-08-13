console.log('Im from summry js');

const blogs = document.getElementsByTagName('p')

for(const blog of blogs){
    blog.style.backgroundColor='steelblue';
    blog.style.color="white";
}

const special = document.getElementById('special-blog')
special.innerHTML="<h2>ahi chowdhrury</h2>"



const friends = document.getElementById('friends')
console.log(friends.childNodes);
console.log(friends.children);

const fifth = friends.children[4];
friends.removeChild(fifth);

// create element 
const friend = document.createElement('li')
friend.innerText = 'Friend-11'
friends.appendChild(friend)