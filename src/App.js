import './App.css';
import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {reloadUser} from './ducks/userReducer'

//import the routes for the auth/registration views
import authRoutes from './routes/authRoutes';

//import components for the main app routes
import mainRoutes from './routes/mainRoutes';

import {loginUser} from './ducks/userReducer';


function App(props) {

useEffect(()=>{
props.reloadUser()
console.log(props)
})

    return (
        <div className="App">
          {console.log(props)}
          {/* Only display the main app views if the user is logged in */}
          {props.isLoggedIn?mainRoutes:authRoutes}
        </div>
    );
}
const mapStateToProps = reduxState => {
  return reduxState.userReducer
}

export default connect(mapStateToProps, {loginUser,reloadUser})(App)