import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import Meal from '../Meal/Meal'
import './Meals.css'
const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[])
    return (
        <div className="main-container">
         
            <div className="meal-container">
            {meals?.map(meal => <Meal meal={meal}/> )}
            </div>
            <div>
              <Cart/>  
            </div>
        </div>
    )
}

export default Meals
