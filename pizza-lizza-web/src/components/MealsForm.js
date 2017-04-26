// Users should be able to order a pizza
//Users should be able to choose a pizza type
// Users should be able to choose the pizza topping
// Users should be able to add fries
// Users should be able to add drinks
// Users should be able to view a list of available pizza
//
// Size
//
import React from 'react';

import { Form, Text } from 'react-form'

const MealsForm = () => {
return (
  <Form
    onSubmit={(values) => {
      console.log('Success!', values)
    }}
    validate={({ name }) => {
      return {
        name: !name ? 'A name is required' : undefined
      }
    }}
  >
    {({submitForm}) => {
      return (
        <form onSubmit={submitForm}>
          <Text field='name' />
          <button type='submit'>Submit</button>
        </form>
      )
    }}
  </Form>
)
}



export default MealsForm;
