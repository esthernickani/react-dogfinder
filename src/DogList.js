import './DogList.css'
import { Link } from "react-router-dom"

const DogList = ({ dogs }) => {
    const allDogs = dogs.map(dog=> (
        <div>
            <h2>
                <Link className="Navbar-link" to={`/dogs/${dog.name.toLowerCase()}`}>
                    {dog.name}
                </Link>
            </h2>
            <img className="DogList-img" src={dog.src} />
        </div>
    ))

    return (
        <div>
            {allDogs}
        </div>
    )
}

export default DogList;