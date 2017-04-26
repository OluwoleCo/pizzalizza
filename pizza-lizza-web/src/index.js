import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import MealsListContainer from './container/MealsListContainer';
import {MealsForm} from './components/MealsForm'
import PizzaContainer from './container/PizzaContainer';
import Header from './components/Header'



class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={MealsListContainer}/>
            <Route path='/form' component={MealsForm}/>
            <Route exact path='/pizza' component={PizzaContainer}/>
            <Route render={() => <h1>Page NOT Found</h1>} />
          </Switch>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
