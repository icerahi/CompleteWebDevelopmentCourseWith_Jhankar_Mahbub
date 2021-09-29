import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Meal from "../meal/Meal";
const Restaurants = () => {
  const [meals,setMeals]=useState([])
  const [searchText,setSearchText]=useState('')
  useEffect(()=>{
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then(res => res.json())
      .then(data => setMeals(data?.meals))
  },[searchText])

  const handleSearch=(e)=>{
    setSearchText(e.target.value)
  }
  return (
    <Container>
      <Row className="my-4 justify-content-center">
        <Col md={8}>
          <InputGroup onChange={handleSearch}>
            <FormControl placeholder="Search here" />
          </InputGroup>{" "}
        </Col>
      </Row>
      <Row xs={1} md={3} className='g-4'>
          {meals?.map((meal,index)=> <Meal key={index} meal={meal}/> )}
      </Row>
    </Container>
  );
};

export default Restaurants;
