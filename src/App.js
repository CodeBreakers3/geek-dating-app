import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Import components for the authentication/registration routes
import AuthHome from './Components/LoginRegisterRoutes/AuthHome';
import Login from './Components/LoginRegisterRoutes/Login';
import Credentials from './Components/LoginRegisterRoutes/Registration/Credentials';
import CoreInfo from './Components/LoginRegisterRoutes/Registration/CoreInfo';
import ProfPic from './Components/LoginRegisterRoutes/Registration/ProfPic';
import Interests from './Components/LoginRegisterRoutes/Registration/Interests';
import SubInterest from './Components/LoginRegisterRoutes/Registration/SubInterests';
import Welcome from './Components/LoginRegisterRoutes/Registration/Welcome';

//import header component, that sits above the main app routes
import Header from './Components/Header';

//import components for the main app routes



function App() {

    return (
        <HashRouter>
        <div className="App">
          <p>AuthRoutes</p>
          <Header/>
          
        </div>
      </HashRouter>
    );
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);
