//Header component
import {connect} from 'react-redux'


const Header = ()=> {
    
    return (
        <header>
            <p>Header</p>
        </header>
    )
}

const mapStateToProps = reduxState => {
    return reduxState.userReducer
  }
  export default connect(mapStateToProps)(Header)