import React, { Component } from 'react';

import MealsList from '../components/MealsList'
import MealsForm from '../components/MealsForm'

class MealsListContainer extends Component {
  state = {
    meals: [
      {
        id: 1,
        image: '',
        name: 'Peperoni',
        alt: ''
      },
      {
        id: 2,
        image: '',
        name:'Cheese Pizza',
        alt: ''
      },
      {
        id: 3,
        image: '',
        name: 'Suya Pizza',
        alt: ''
      },
      {
        id: 4,
        image: '',
        name: 'Peperoni',
        alt: ''
      },
      {
        id: 5,
        image: '',
        name:'Cheese Pizza',
        alt: ''
      },
      {
        id: 6,
        image: '',
        name: 'Suya Pizza',
        alt: ''
      }
    ]
  }

  render() {
    return (
      <div>
        <MealsList meals={this.state.meals} />
        <MealsForm />
      </div>
    )
  }
}

export default MealsListContainer;
