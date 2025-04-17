


export default Header

import { Link } from  'react-router-dom'

function Header() {
    return(
        <nav>
            <Link to="/">Acceuil</Link>
            <Link to="/survey">Questionnaire</Link>
        </nav>
    )
    
}