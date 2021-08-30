const searchFood = async() => {
    const searchField = document.getElementById("search_field");
    const searchKey = searchField.value;
    if (searchKey == "") {
      alert("please write something to search");
    } else {
      //clear data
      searchField.value = "";
      //   document.getElementById('search_result').innerHTML=""
      document.getElementById("search_result").textContent = "";
      // load data
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKey}`;
  
    try{
        const res = await fetch(url)
        const data = await res.json()
        displayResult(data.meals)
    }
    catch(error){
        alert(error)
    }
    //   fetch(url).then((res) => res.json())
    //     .then((data) => displayResult(data.meals))
    //     .catch((error)=> alert(error))
    }
  };
  
  const displayResult = (meals) => {
    const searchResult = document.getElementById("search_result");
   
    if (meals == null) {
      //   show no result found
      const not_found = document.createElement("h1");
      not_found.innerText = "Result not found";
      searchResult.appendChild(not_found);
    } else {
      meals.forEach((meal) => {
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
              <div onclick="loadMealDetail('${meal.idMeal}')" class="card h-100">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text"> ${meal.strInstructions.slice(0, 100)}</p>
              </div>
            </div>
              `;
        searchResult.appendChild(div);
      });
    }
  };
  
  const loadMealDetail = async(mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    try{
        const res = await fetch(url)
        const data = await res.json()
        displayMealDetails(data.meals[0])
    }
    catch(error){
        alert(error)
    }
   

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => displayMealDetails(data.meals[0]));
  };
  
  const displayMealDetails = (meal) => {
    const mealDetails = document.getElementById("meal_details");
    mealDetails.textContent="";
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
      </div>
      `;
    mealDetails.appendChild(div);
  };
  