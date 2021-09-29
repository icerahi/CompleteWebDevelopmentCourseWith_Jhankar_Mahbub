import Button from '@restart/ui/esm/Button'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import {useParams} from 'react-router-dom'

const MealDetail = () => {
    const {mealId}=useParams()
    const [meal,setMeal]=useState({})
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => setMeal(data?.meals[0]))
    },[])
    return (
        <Card className="w-50 mx-auto my-5">
        <Card.Img variant="top" className="mx-auto" style={{height:'50%',width:'50%'}} src={meal?.strMealThumb} />
        <Card.Body>
          <Card.Title>{meal?.strMeal}</Card.Title>
          <Card.Text>
           {meal?.strInstructions}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default MealDetail
