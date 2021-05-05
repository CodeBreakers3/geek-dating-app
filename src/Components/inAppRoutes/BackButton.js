//BackButton component
import {useHistory} from 'react-router-dom'

const BackButton = () => {
let history = useHistory()

    return (
        <button onClick={() => history.goBack()}>&#8592; Go Back</button>
    )
}

export default BackButton;