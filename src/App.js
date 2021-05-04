import './App.css';
import { HashRouter } from 'react-router-dom';

//import the routes for the auth/registration views
import authRoutes from './routes/authRoutes';

//import header component, that sits above the main app routes
import Header from './Components/Header';

//import components for the main app routes
import mainRoutes from './routes/mainRoutes';


function App(props) {
    return (
        <HashRouter>
        <div className="App">
          {/* Only display the header if the user is logged in */}
          {props.isLoggedIn?<Header/>:null}
          {/* Only display the main app views if the user is logged in */}
          {props.isLoggedIn?mainRoutes:authRoutes}
        </div>
      </HashRouter>
    );
}

export default App;
