
document
  .getElementById("login_submit")
  .addEventListener("click", function (event) {
      //get user email && password
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const email = emailField.value;
    const password = passwordField.value;
   
    if (email == "sontan@baap.com" && password == "secret") {
      window.location.href = "./banking.html";
    }
    
  });

 