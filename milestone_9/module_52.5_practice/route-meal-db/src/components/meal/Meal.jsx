import React from "react";
import { Card, Col,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Meal = ({ meal }) => {
  const history = useHistory()

  const handleClick=()=>{
    history.push(`/meal/${meal.idMeal}`)
  }
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={meal.strMealThumb} />
        <Card.Body>
          <Card.Title>{meal.strMeal}</Card.Title>
          <Card.Text>
           {meal.strInstructions.slice(0,100)}
          </Card.Text>
          <Link to={`/meal/${meal.idMeal}`}> Link used </Link>
          <Link to={`/meal/${meal.idMeal}`}><Button variant='primary'>Show Details</Button> </Link>
          <Button onClick={handleClick} variant='danger'>Show Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Meal;
