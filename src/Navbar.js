import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = ({dogs}) => {

    const links = dogs.map(dog => (
        <Link className="Navbar-link" to={`/dogs/${dog.name.toLowerCase()}`}>
        {dog.name}
        </Link>
    ))


    return (
        <div>
            <Link to="/">Home</Link>
            {links}
        </div>
    )
}

export default Navbar;