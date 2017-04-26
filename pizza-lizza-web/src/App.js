import React, { Component } from 'react';
import HTTP from './services/httpservices';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import Pizza from './components/Pizza';
import Fries from './components/Fries';
import Rice from './components/Rice';
import Header from './components/Header'


class App extends Component {

state = {
  pizza: [],
  fries: []
}
componentWillMount() {
  //Want to be able to get the data
  HTTP.get('/pizza')
  .then(pizza => {
    console.log(pizza)
    this.setState({
      pizza
    });
  })

  HTTP.get('/fries')
  .then(fries => {
    console.log(fries)
    this.setState({
      fries
    });
  })

}

  render() {
    console.log('Rendered')
    let renderPizza = (matchProps) => {
      matchProps.pizza = this.state.pizza;
      return <Pizza {...matchProps}  />
    }

    let renderFries = (matchProps) => {
      matchProps.fries = this.state.fries;
      return <Fries {...matchProps}  />
    }

    let renderRice = (matchProps) => {
      matchProps.rice = this.state.rice;
      return <Rice {...matchProps}  />
    }


    return (
      <div>
        <Router>
          <div>
            <Header />
            <Switch>
              {/* <Route exact path='/' component={Pizza}/> */}
              <Route exact path='/' render={renderPizza}/>
              <Route exact path='/pizza' render={renderPizza}/>
              <Route exact path='/fries' render={renderFries}/>
              <Route exact path='/rice' render={renderRice}/>
              <Route render={() => <h1>Page NOT Found</h1>} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
