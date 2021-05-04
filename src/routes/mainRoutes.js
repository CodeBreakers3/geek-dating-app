import {Switch, Route} from 'react-router-dom';
//import components for the main app routes
import Swipe from '../Components/inAppRoutes/Swipe/Swipe';
import MyProfile from '../Components/inAppRoutes/MyProfile/MyProfile';
import Matches from '../Components/inAppRoutes/Matches/Matches';

export default (
    <Switch>
        <Route exact path="/" component={Swipe}/>
        <Route exact path="/myprofile" component={MyProfile}/>
        <Route exact path="/matches" component={Matches}/>
    </Switch>
)