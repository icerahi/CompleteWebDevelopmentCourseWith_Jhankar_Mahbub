import React from 'react'
import './Meal.css'
const Meal = ({meal}) => {
    console.log(meal)
    return (
        <div className="meal-card">
            <img className="meal-img" src={meal.strMealThumb} alt="" />
            <h2>{meal.strMeal}</h2>
            <p>Category: {meal.strCategory} </p>
        </div>
    )
}

export default Meal
