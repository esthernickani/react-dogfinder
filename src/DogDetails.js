import { useParams } from "react-router-dom"
import './DogDetails.css'

const DogDetails = ({ dogs }) => {
    const { name } = useParams()
    const dogName = name[0].toUpperCase() + name.substring(1)


    const dogInfo = dogs.map(dog => {
            if (dog.name === dogName) {
                return (
                    <div>
                        <h2>Name: {dog.name}</h2>
                        <h3>Age: {dog.age}</h3>
                        <img className="DogDetails-img" src={dog.src}/>
                        <ul>
                            {dog.facts.map(fact => (
                                <li>{fact}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
        }
    )

    return (
        <div>
            {dogInfo}
        </div>
    )
}

export default DogDetails;