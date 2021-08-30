const loadComments = async () => {
  await fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComments(data));
};
const displayComments = (comments) => {
  const container = document.getElementById("comments");
  comments.forEach((comment) => {
    const cmntDiv = document.createElement("div");
    cmntDiv.classList.add("comment");
    cmntDiv.innerHTML = `Comment: <p>${comment.body}</p> Name: <small>${comment.name}(${comment.email})</small>`;
    container.appendChild(cmntDiv)
  });
};

loadComments()