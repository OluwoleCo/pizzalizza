import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import App from './App'


// class Index extends React.Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <Header />
//           <Switch>
//             <Route exact path='/' component={MealsListContainer}/>
//             <Route exact path='/app' component={App}/>
//             <Route path='/form' component={MealsForm}/>
//             <Route exact path='/pizza' component={PizzaContainer}/>
//             <Route render={() => <h1>Page NOT Found</h1>} />
//           </Switch>
//         </Router>
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
