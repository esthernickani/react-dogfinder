import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import DogList from './DogList';
import DogDetails from './DogDetails';
import perry from './perry.jpg'
import whiskey from './whiskey.jpg'
import duke from './duke.jpg'
import tubby from './tubby.jpg'

function App(props) {
  const { dogs } = props
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar dogs={dogs} />
        <Routes>
          <Route exact path="/dogs" element={<DogList dogs={dogs}/>} />
          <Route exact path="/dogs/:name" element={<DogDetails dogs={dogs}/>} />
          <Route exact path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )

}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
