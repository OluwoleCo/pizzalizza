// This shows the list of meals available\
// This will be an array of objects fro each meals
// With the object having picture and
//

import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const MealsList = (props) => {
  let mealsListStyle = {
    container: {
      borderRadius: 5,
      height: 250,
      width: 250,
      backgroundColor: 'tomato',
      margin: 9

    }
  }
  let { container }  = mealsListStyle
  let meals = props.meals;
  console.log(meals)


  return (
    <div>
      {meals.map(meal => {
        return (
          <div className="col-md-4" key={meal.id} style={container}>
            <Card >
              <CardImg style={{borderRadius: 3}}width="100%" src={meal.image} alt={meal.alt} />
              <CardImgOverlay>
                <CardTitle>{meal.name}</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default MealsList;
