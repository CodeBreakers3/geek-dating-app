//BackButton component
import {useHistory} from 'react-router-dom'

const BackButton = () => {
let history = useHistory()

    return (
        <header>
            <p onClick={history.goBack()}>BackButton</p>
        </header>
    )
}

export default BackButton;