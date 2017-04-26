import React from 'react';

import {HashRouter, NavLink} from 'react-router-dom';

const Header = () => {

  let styles = {
    containerStyle: {
      // backgroundColor: 'red',
      margin: '0 auto',
      width: 180,
      color: 'black',
      marginTop: 10

    },
    spanStyle: {
      margin: 10,
      border: '1px solid yellowgreen',
      padding: 4
    }
  }
  return (
      <HashRouter>
        <div style={styles.containerStyle}>
          <NavLink activeStyle={{color: 'tomato'}} to='/pizza'>
            <span style={styles.spanStyle}>Pizza</span>
          </NavLink>
          <NavLink activeStyle={{color: 'tomato'}} to='/fries'>
            <span style={styles.spanStyle}>Fries</span>
          </NavLink>
          <NavLink activeStyle={{color: 'tomato'}} to='/rice'>
            <span style={styles.spanStyle}>Rice</span>
          </NavLink>
          <NavLink activeStyle={{color: 'tomato'}} to='/chicken'>
            <span style={styles.spanStyle}>Chicken</span>
          </NavLink>
          <NavLink activeStyle={{color: 'tomato'}} to='/drinks'>
            <span style={styles.spanStyle}>Drinks</span>
          </NavLink>
        </div>
      </HashRouter>
  )
}

export default Header;
