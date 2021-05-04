import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Components/LoginRegisterRoutes/Login'
export default (
    <Switch>
      <Route exact path="/"  render={()=><Login/> } /> 
    </Switch>
  )
  