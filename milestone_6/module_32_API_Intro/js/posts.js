const loadPosts = async() => {
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
};

loadPosts();

const displayPosts =(posts) => {
  const postContainer = document.getElementById("posts");
  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
    <h3>${post.title}</h3> 
    <p>${post.body}</p>
    `;
    postContainer.appendChild(postDiv);
  });
};

//post method

const addPost =()=>{
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:'POST',
        body:JSON.stringify({
            title:"my new post",
            body:"my post body",
            userId:1
        }),
        headers:{
            'Content-type':'application/json;charset=UTF-8'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}
addPost();