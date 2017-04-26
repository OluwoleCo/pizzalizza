import React, { Component } from 'react';
import HTTP from '../services/httpservices';
import Pizza from '../components/Pizza'


class PizzaContainer extends Component {
//
console.log('STATE', this.state.pizza)
// state = {
//   pizza: []
// }
// componentWillMount() {
//   //Want to be able to get the data
//   HTTP.get('/pizza')
//   .then(pizza => {
//     console.log(pizza)
//     this.setState({
//       pizza
//     });
//   })
//
// }

  render() {
    console.log('PIZZPROPS', this.props.pizza)
    return (
      <div style={{marginLeft: 120}}>
        {/* <Pizza meals={this.state.pizza}/> */}
        <Pizza meals={this.props.pizza}/>
      </div>
    )
  }
}

export default PizzaContainer;
