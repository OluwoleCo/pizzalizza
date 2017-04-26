import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

const Pizza = (props) => {
  let meals = props.pizza;
  console.log(props)


  let mealsListStyle = {
    container: {
      borderRadius: 5,
      height: 250,
      width: 250,
      backgroundColor: 'tomato',
      margin: 12,
    }
  }
  let { container }  = mealsListStyle


  return (
    <div>
      {meals.map(meal => {
        return (
          <div className="col-md-4" key={meal.id} style={container}>
            <Card >
              <CardImg style={{borderRadius: 3}}width="100%" src={meal.image} alt={meal.alt} />
              <CardImgOverlay>
                <CardTitle>{meal.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default Pizza;
