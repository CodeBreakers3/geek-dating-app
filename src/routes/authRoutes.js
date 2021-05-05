import {Switch, Route} from 'react-router-dom';

// Import components for the authentication/registration routes
import AuthHome from '../Components/LoginRegisterRoutes/AuthHome';
import Login from '../Components/LoginRegisterRoutes/Login';
import Credentials from '../Components/LoginRegisterRoutes/Registration/Credentials';
import CoreInfo from '../Components/LoginRegisterRoutes/Registration/CoreInfo';
import ProfPic from '../Components/LoginRegisterRoutes/Registration/ProfPic';
import Interests from '../Components/LoginRegisterRoutes/Registration/Interests';
import SubInterest from '../Components/LoginRegisterRoutes/Registration/SubInterests';
import Welcome from '../Components/LoginRegisterRoutes/Registration/Welcome';

export default (
    <Switch>
        <Route exact path="/" component={AuthHome}/>
        <Route path="/login" component={Login}/>
        <Route path="/credentials" component={Credentials}/>
        <Route path="/coreinfo" component={CoreInfo}/>
        <Route path="/profpics" component={ProfPic}/>
        <Route path="/interests" component={Interests}/>
        <Route path="/subinterests" component={SubInterest}/>
        <Route path="/welcome" component={Welcome}/>
    </Switch>
)