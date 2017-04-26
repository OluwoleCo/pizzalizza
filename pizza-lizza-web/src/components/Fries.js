import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

const Pizza = (props) => {
  let fries = props.fries;
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
      {fries.map(fry => {
        return (
          <div className="col-md-4" key={fry.id} style={container}>
            <Card >
              <CardImg style={{borderRadius: 3}}width="100%" src={fry.image} alt={fry.alt} />
              <CardImgOverlay>
                <CardTitle>{fry.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default Pizza;
