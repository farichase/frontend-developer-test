import React from 'react';
import CardsList from './components/CardsList/CardsList';
import classes from './App.module.css'

const App = () => {
  return (
    <div>
      <div className={classes.topnav}>
        <h1 className={classes.name}>
          Финансовые предложения
        </h1>
      </div>
      <CardsList/>
    </div>
  )
}

export default App;
