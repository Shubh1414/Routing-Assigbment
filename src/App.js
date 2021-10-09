import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Lifecycle from './Lifecycle';
import Mounting from './Mounting';
import Unmouting from './Unmouting';
import Updating from './Updating';




const App = () => {
  return (
    <>
      <Lifecycle />
      <Switch>
        <Route exact path="/" component={Mounting} />
        <Route path="/unmounting" component={Unmouting} />
        <Route path="/updating" component={Updating} />
      </Switch>
      {/* <Mouting />,
      <Unmouting />,
      <Updating /> */}
    </>
  )


};



export default App;