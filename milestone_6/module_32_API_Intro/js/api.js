
const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json.title))
}

const loadUsers=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

const loadPosts=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}

const displayUsers=(data)=>{
    const ul = document.getElementById('users')
    data.forEach(item => {
        const li = document.createElement('li')
        li.innerText = `Name : ${item.name},Email: ${item.email}`
        ul.appendChild(li)
    });
}