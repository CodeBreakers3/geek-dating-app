//non component imports
import {Switch, Route} from 'react-router-dom';
//component imports
import Swipe from '../Components/inAppRoutes/Swipe/Swipe';
import MyProfile from '../Components/inAppRoutes/MyProfile/MyProfile';
import Matches from '../Components/inAppRoutes/Matches/Matches';
import LargeProfile from './../Components/inAppRoutes/Swipe/ProfileLarge';
import EditFilters from './../Components/inAppRoutes/MyProfile/EditFilters';
import EditProfile from './../Components/inAppRoutes/MyProfile/EditProfile';
import Chats from '../Components/inAppRoutes/Matches/Chats'


export default (
    <Switch>
        <Route exact path="/" component={Swipe}/>
        <Route path="/myprofile" component={MyProfile}/>
        <Route path="/matches" render={()=><Matches/>}/>
        <Route path="/chats/:match_id" component={Chats}/>
        <Route path="/largeprofile/:profile_id" component={LargeProfile}/>
        <Route path="/editfilters" component={EditFilters}/>
        <Route path="/editprofile" component={EditProfile}/>
    </Switch>
)