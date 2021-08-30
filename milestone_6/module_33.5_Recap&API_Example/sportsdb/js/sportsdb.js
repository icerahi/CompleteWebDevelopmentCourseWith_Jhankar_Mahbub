// handling enter button
document.getElementById("search_field").addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    loadData();
  }
});

const loadData = async () => {
  const searchField = document.getElementById("search_field");
  const key = searchField.value;
  if (key == "") {
    alert("please write something to search!!");
  } else {
    searchField.value = "";
    document.getElementById("teams").textContent = "";

    const url = ` https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${key}`;

    try{
        const res = await fetch(url);
    const data = await res.json();
    showData(data?.teams);
    }
    catch(error){
        alert(error)
    }
  }
};

const showData = (teams) => {
  const teamsContainer = document.getElementById("teams");
  console.log(teams);
  if (teams == null) {
    alert(`No result found !!`);
  } else {
    teams.forEach((team) => {
      const div = document.createElement("div");
      div.className = "card col-md-8 my-3 mx-auto";
      div.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title h3"> ${team?.strTeam} </h5>
                    <small> Country : <span class="fw-bold">${
                      team?.strCountry
                    } </span>  Gender : <span class="fw-bold">${
        team?.strGender
      } </span> </small>
                    <p class="card-text my-4"> ${team?.strDescriptionEN.slice(0,100)}.... </p>
                    <button onclick="showDetails('${
                      team?.idTeam
                    }')" class="btn btn-outline-dark"> details </button>
                </div>
            `;
      teamsContainer.appendChild(div);
    });
  }
};
// show details

const showDetails = async (id) => {
  //remove existing modal
  const dialogBox=document.querySelectorAll('.dialog-box')

  if(dialogBox){
    dialogBox.forEach(box =>{
      box.parentNode.removeChild(box)
    })
   
  }
  

  const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
  const res = await fetch(url);
  const data = await res.json();

  const team = data?.teams[0];
  showModal(team);
};

const showModal = (team) => {
  const body = document.querySelector("body");
  const div = document.createElement("div");

  div.innerHTML = `
   
   <div class="dialog-box">
   <div class="dialog-close">X</div>
   <h5 class="card-title h3"> ${team?.strTeam}</h5>
   <p class="card-text my-4"> ${team?.strDescriptionEN}</p>
    </div>
   `;
  body.appendChild(div);

  body.onclick = (event) => {
    if (event.target.className == "dialog-close") {
      const dialogBox=document.querySelectorAll('.dialog-box')

      if(dialogBox){
        dialogBox.forEach(box =>{
          box.parentNode.removeChild(box)
        })
       
      }
    }
  };
};
