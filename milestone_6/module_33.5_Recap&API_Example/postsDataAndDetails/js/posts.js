
// load post 
const loadPosts = async () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    showPosts(data);
  } catch {}
};
 
loadPosts()
// display post on web 
const showPosts = (posts) => {
  const postsContainer = document.getElementById("posts");

  posts.forEach((post) => {
    const div = document.createElement("div");
    div.className = "card col-md-8 mt-5 mx-auto";
    div.innerHTML = `
        <div class="card-body">
            <h5 class="card-title h3"> ${post.title}</h5>
             <p class="card-text my-4">${post.body.substr(0,200)}....</p>
             <button onclick="showDetails('${post.id}')" class="btn btn-outline-dark"> More </button>
              
      </div>
        `;
    postsContainer.appendChild(div);
  });
};

// show details 
const showDetails = async id =>{
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const res = await fetch(url)
    const data = await res.json()

    const body = document.querySelector('body')
    const div = document.createElement('div')
   div.innerHTML=`
   <div class="dialog-box animate__animated animate__rollIn">
    <div class="dialog-close">X</div>
   <h5 class="card-title h3"> ${data.title}</h5>
    <p class="card-text my-4">${data.body}</p>
    
     
 
    </div>
   `
   body.appendChild(div)

//    close dialog
   body.onclick=event=>{
 
       if ((event.target.className.split(" ")[0] !='dialog-box' && event.target.parentNode.className.split(" ")[0] !='dialog-box' ) ||(event.target.className=='dialog-close')){
        
        // div.children[0].classList.add('animate__rollOut')

        div.parentNode.removeChild(div)
       }
   }

}

const ClearScreen=()=>{
  const posts=document.getElementById('posts')
  posts.textContent = ''
}

 