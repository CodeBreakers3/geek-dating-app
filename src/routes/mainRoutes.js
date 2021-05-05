import {Switch, Route} from 'react-router-dom';
//import components for the main app routes
import Swipe from '../Components/inAppRoutes/Swipe/Swipe';
import MyProfile from '../Components/inAppRoutes/MyProfile/MyProfile';
import Matches from '../Components/inAppRoutes/Matches/Matches';
import LargeProfile from './../Components/inAppRoutes/Swipe/ProfileLarge';

export default (
    <Switch>
        <Route exact path="/" component={Swipe}/>
        <Route exact path="/myprofile" component={MyProfile}/>
        <Route exact path="/matches" component={Matches}/>
        <Route exact path="/largeprofile" component={LargeProfile}/>
    </Switch>
)