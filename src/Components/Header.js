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
                    <div className="header-profile-icon">PROFILE</div>
                </Link>
            </div>

            <div className="header-logo-icon-container">
                <Link to="/">
                    <div className="header-logo-icon">LOGO</div>
                </Link>
            </div>

            <div className="header-matches-icon-container">
                <Link to="/matches">
                    <div className="header-matches-icon">MATCHES</div>
                </Link>
            </div>
        </header>
    )
}

const mapStateToProps = reduxState => {
    return reduxState.userReducer
  }
  export default connect(mapStateToProps)(Header)