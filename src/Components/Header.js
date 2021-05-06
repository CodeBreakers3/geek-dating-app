//non component imports
import './header.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

//component imports

//Header component
const Header = ()=> {
    
    return (
        <header>
            <div className="header-profile-icon-container">
                <Link to="/myprofile">
                    <div className="header-icon-profile">
                        <img alt="my profile icon" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/profile2.svg"/>
                    </div>
                </Link>
            </div>

            <div className="header-logo-icon-container">
                <Link to="/">
                    <div className="header-icon-logo">
                        <img alt="my profile icon" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/logo2.svg"/>
                    </div>
                </Link>
            </div>

            <div className="header-matches-icon-container">
                <Link to="/matches">
                    <div className="header-icon-matches">
                        <img alt="my profile icon" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/matches2.svg"/>
                    </div>
                </Link>
            </div>
        </header>
    )
}

const mapStateToProps = reduxState => {
    return reduxState.userReducer
  }
  export default connect(mapStateToProps)(Header)